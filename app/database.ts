import * as SQLite from 'expo-sqlite';

let db: any = null;

const initializeDatabase = async () => {
    db = await SQLite.openDatabaseAsync('diabuddy');
};

export const setupDatabase = async (): Promise<void> => {
    if (!db) await initializeDatabase();

    await db.execAsync(
        `CREATE TABLE IF NOT EXISTS glucoselog;
         (
             id INTEGER PRIMARY KEY AUTOINCREMENT, datereading DATE, breakfast REAL, lunch REAL,
             dinner REAL, bedtime REAL, notes TEXT, created DATETIME DEFAULT CURRENT_TIMESTAMP,
             modified DATETIME DEFAULT CURRENT_TIMESTAMP
         )`
    );
};

export default db;
