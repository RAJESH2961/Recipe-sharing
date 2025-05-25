//
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