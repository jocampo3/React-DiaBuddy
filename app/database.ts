import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('diabuddy');

export const setupDatabase = (): void => {
    db.execAsync(
        `CREATE TABLE IF NOT EXISTS glucoselog (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         datereading DATE,
         breakfast REAL,
         lunch REAL,
         dinner REAL,
         bedtime REAL,
         notes TEXT,
         created DATETIME DEFAULT CURRENT_TIMESTAMP,
         modified DATETIME DEFAULT CURRENT_TIMESTAMP
       )`
    );
};

export default db;
