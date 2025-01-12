import Database from 'better-sqlite3'

const database = new Database('my-database.db');
database.exec(`
    CREATE TABLE IF NOT EXISTS materials (
      id INTEGER PRIMARY KEY, 
      description TEXT
    )
  `);