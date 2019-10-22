const db = require('./conn.js');

class Trails {
    constructor(id, name, picture){
        this.id = id;
        this.name = name;
        this.picture = picture;
    }

    static async getAllTrails() {
        try {
            const response = await db.any(`SELECT * FROM trails;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }
    
    static async getById(id) {
        try {
            const response = await db.one(
                `SELECT * from trails where ID = $1;`, [id]
            );
            console.log('response is: ', response);
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Trails;