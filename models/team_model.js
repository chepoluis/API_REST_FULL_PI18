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
}

module.exports = TeamModel;