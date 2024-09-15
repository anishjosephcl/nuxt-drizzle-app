import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { users } from '../../db/schema';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

export const getUsers = async () => {
  return db.select().from(users).all();
};