const pgp = require('pg-promise') ({
    query: e => {
        console.log('QUERY:', e.query);
    }
})

const options = {
    host: 'localhost',
    database: 'trail_review',
    user: 'chilldev',
    password: 'password'
}

const db = pgp(options);

module.exports = db;