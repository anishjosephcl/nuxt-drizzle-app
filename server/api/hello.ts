import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export default defineEventHandler(() => {
    const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);
// Define the users table schema
const users = sqliteTable('users', {
    id: text('id').primaryKey(), // Assuming 'id' is the primary key
    textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
    intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});
async function createTable() {
    db.run(sql`CREATE TABLE IF NOT EXISTS ${users} (
       id TEXT PRIMARY KEY,
       text_modifiers TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
       int_modifiers INTEGER NOT NULL DEFAULT 0
   )`);
}
async function insertUser(id: string, textModifiers: string, intModifiers: boolean) {
    const newUser = {
        id,
        textModifiers,
        intModifiers,
    };

    try {
        const result = await db.insert(users).values(newUser).returning();
        console.log('Inserted User:', result);
    } catch (error) {
        console.error('Error inserting user:', error);
    }
}

    createTable(); 
  //  insertUser('user1', 'Sample text', true);
    const result =  db.select().from(users).all(); // Select from the users table
    
    return { message: 'Hello from the API!' , result };
  })