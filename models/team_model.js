const conn = require('./model');

class TeamModel {

    getAll(cb) { 
        conn.query('SELECT * FROM seller', cb); 
    }

    getAllCars(cb) {
        conn.query('SELECT * FROM cars', cb);
    }

    getAllReports(cb) {
        conn.query('SELECT * FROM orders', cb);
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

    saveCar(data, cb) {
        conn.query('SELECT * FROM cars WHERE productCode = ?', data.productCode, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE cars SET ? WHERE productCode = ?', [data, data.productCode], cb)
                    : conn.query('INSERT INTO cars SET ?', data, cb);
        });
    }

    saveOrder(data, cb) {
        conn.query('SELECT * FROM orders WHERE idOrderNumber = ?', data.idOrderNumber, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE orders SET ? WHERE idOrderNumber = ?', [data, data.productCode], cb)
                    : conn.query('INSERT INTO orders SET ?', data, cb);
        });
    }

    getCar(productCode, cb) {
        conn.query('SELECT * FROM cars WHERE productCode = ?', productCode, cb);
    }

    delete(id, cb) {
        conn.query('DELETE FROM seller WHERE idSeller = ?', id, cb);
    }

    // Error
    deleteCar(id, cb) {
        conn.query('DELETE FROM cars WHERE productCode = ?', id, cb);
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