import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);
const users = sqliteTable('users', {
    id: text('id'),
    textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
    intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
  });
const result = await db.select().from(users);