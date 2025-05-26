// file system
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';
import sql from 'better-sqlite3'

const db = sql('meals.db');
// fetching data from db
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));// Artificial delay

    // throw new Error('Loading  meals failed')
    return db.prepare('SELECT * FROM meals').all();
}

// get meal
export function getMeal(slug){
    // wont Protects  sql injection
    // return db.prepare('SELECT * FROM meals WHERE slug = '+ slug);
    // Protects sql injection
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// save a meal
export async function saveMeal(meal){
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions); // sanitize and clean the instructions
    // extracting extension and creating an unique name based on slug
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error) {
            throw new Error("Saving image failed !");
        }
    });

    meal.image = `/images/${fileName}`

    // saving in dbnjection protection using better-sqlite
    // sql i
    db.prepare(`
        INSERT INTO meals(title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
        @image,
         @slug        
        )
        `).run(meal);
}