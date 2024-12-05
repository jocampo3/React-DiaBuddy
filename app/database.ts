import * as SQLite from 'expo-sqlite';

export interface GlucoseLog {
    id?: number;
    datereading: string;
    breakfast: string;
    lunch: string;
    dinner: string;
    bedtime: string;
    notes: string;
    created?: string;
    modified?: string;
}

let db: SQLite.SQLiteDatabase | null = null;

const initializeDatabase = async () => {
    db = await SQLite.openDatabaseAsync('diabuddy');
    console.log('Database initialized');
};

export const setupDatabase = async (): Promise<void> => {
    if (!db) await initializeDatabase();
    await db?.execAsync(
        `CREATE TABLE IF NOT EXISTS glucoselog
         (
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

export const dbSave = async (
    breakfast: string,
    lunch: string,
    dinner: string,
    bedtime: string,
    notes: string
): Promise<number | null> => {
    if (!db) {
        console.error("Database is not initialized.");
        return null;
    }

    try {
        const result = await db.runAsync(
            `INSERT INTO glucoselog (datereading, breakfast, lunch, dinner, bedtime, notes) VALUES (?, ?, ?, ?, ?, ?)`,
            new Date().toISOString().split('T')[0],
            breakfast,
            lunch,
            dinner,
            bedtime,
            notes
        );
        return result.lastInsertRowId;
    } catch (error) {
        console.error("Error saving glucose log:", error);
        return null;
    }
};

export const dbRetrieve = async (): Promise<GlucoseLog[]> => {
    if (!db) {
        console.error("Database is not initialized.");
        return [];
    }

    try {
        return await db.getAllAsync<GlucoseLog>(
            `SELECT * FROM glucoselog ORDER BY created DESC`
        );
    } catch (error) {
        console.error("Error retrieving glucose logs:", error);
        return [];
    }
};

export const dbUpdate = async (
    id: number,
    breakfast: string,
    lunch: string,
    dinner: string,
    bedtime: string,
    notes: string
): Promise<void> => {
    if (!db) {
        console.error("Database is not initialized.");
        return;
    }

    try {
        await db.runAsync(
            `UPDATE glucoselog SET breakfast = ?, lunch = ?, dinner = ?, bedtime = ?, notes = ?, modified = CURRENT_TIMESTAMP WHERE id = ?`,
            breakfast,
            lunch,
            dinner,
            bedtime,
            notes,
            id
        );
    } catch (error) {
        console.error("Error updating glucose log:", error);
    }
};

export const dbDelete = async (id: number): Promise<void> => {
    if (!db) {
        console.error("Database is not initialized.");
        return;
    }

    try {
        await db.runAsync(
            `DELETE FROM glucoselog WHERE id = ?`,
            id
        );
    } catch (error) {
        console.error("Error deleting glucose log:", error);
    }
};
