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

// ✅ Generate a unique slug to avoid UNIQUE constraint failure
function generateUniqueSlug(baseSlug) {
  let slug = baseSlug;
  let count = 1;

  while (db.prepare('SELECT 1 FROM meals WHERE slug = ?').get(slug)) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
}

// ✅ Save a meal securely
export async function saveMeal(meal) {
  const baseSlug = slugify(meal.title, { lower: true });
  meal.slug = generateUniqueSlug(baseSlug); // 🔐 ensure unique slug
  meal.instructions = xss(meal.instructions); // 🧼 sanitize

  // 🖼️ Extract extension and generate unique image name
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`; // 👌 set path

  // 🗄️ Save meal to DB securely
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