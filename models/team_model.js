const conn = require('./model');

class TeamModel {

    getAll(cb) { 
        conn.query('SELECT * FROM seller', cb); 
    }

    getOne(id, cb) {
        conn.query('SELECT * FROM seller WHERE idSeller = ?', id, cb);
    }

    save(data, cb) {
        conn.query('SELECT * FROM seller WHERE idSeller = ?', data.idSeller, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE seller SET ? WHERE idSeller = ?', [data, data.idSeller], cb)
                    : conn.query('INSERT INTO seller SET ?', data, cb);
        });
    }

    delete(id, cb) {
        conn.query('DELETE FROM seller WHERE idSeller = ?', id, cb);
    }

    saveUser(data, cb) {
        conn.query('SELECT * FROM employees WHERE idEmployeed = ?', data.idEmployeed, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE employees SET ? WHERE idEmployeed = ?', [data, data.idEmployeed], cb)
                    : conn.query('INSERT INTO employees SET ?', data, cb);
        });
    }
}

module.exports = TeamModel;