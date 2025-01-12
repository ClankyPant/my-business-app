import Database from "better-sqlite3"

export default {
    
    getMaterials: () => {
        try {
            const database = new Database('my-database.db')
            return database.prepare("SELECT * FROM materials").all();
        } catch (error) {
            console.log(error);
        }

        return undefined;
    }
}