const conexion = require('./model');

class TeamModel {
 
    getAll(cb) { 
        conexion.query('SELECT * FROM seller', cb); 
    }

    getAllCars(cb) {
        conexion.query('SELECT * FROM cars', cb);
    }
    
    getCarsSucursal(sucursalCode, cb) {
        conexion.query('SELECT * FROM cars INNER JOIN sucursales ON cars.sucursales_sucursalCode = sucursales.sucursalCode WHERE cars.sucursales_sucursalCode = ?', sucursalCode, cb);
    }

    getAllReports(cb) {
        conexion.query('SELECT * FROM orders', cb);
    }

    getOne(id, cb) {
        conexion.query('SELECT * FROM seller WHERE idSeller = ?', id, cb);
    }

    save(data, cb) {
        conexion.query('SELECT * FROM seller WHERE idSeller = ?', data.idSeller, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conexion.query('UPDATE seller SET ? WHERE idSeller = ?', [data, data.idSeller], cb)
                    : conexion.query('INSERT INTO seller SET ?', data, cb);
        });
    }

    saveCar(data, cb) {
        conexion.query('SELECT * FROM cars WHERE productCode = ?', data.productCode, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conexion.query('UPDATE cars SET ? WHERE productCode = ?', [data, data.productCode], cb)
                    : conexion.query('INSERT INTO cars SET ?', data, cb);
        });
    }

    saveOrder(data, cb) {
        conexion.query('SELECT * FROM orders WHERE idOrderNumber = ?', data.idOrderNumber, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conexion.query('UPDATE orders SET ? WHERE idOrderNumber = ?', [data, data.productCode], cb)
                    : conexion.query('INSERT INTO orders SET ?', data, cb);
        });
    }

    saveSucursal(data, cb) {
        conexion.query('SELECT * FROM sucursales WHERE sucursalCode = ?', data.sucursalCode, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conexion.query('UPDATE sucursales SET ? WHERE sucursalCode = ?', [data, data.sucursalCode], cb)
                    : conexion.query('INSERT INTO sucursales SET ?', data, cb);
        });
    }

    getCar(productCode, cb) {
        conexion.query('SELECT * FROM cars WHERE productCode = ?', productCode, cb);
    }

    getSucursales(cb) {
        conexion.query('SELECT * FROM sucursales', cb);
    }

    getSucursal(sucursalCode, cb) {
        conexion.query('SELECT * FROM sucursales WHERE sucursalCode = ?', sucursalCode, cb);
    }

    getEmployees(cb) {
        conexion.query('SELECT * FROM employees', cb);
    }

    getEmployee(idEmployeed, cb) {
        conexion.query('SELECT * FROM employees WHERE idEmployeed = ?', idEmployeed, cb);
    }

    delete(id, cb) {
        conexion.query('DELETE FROM seller WHERE idSeller = ?', id, cb);
    }

    deleteSucursal(id, cb) {
        conexion.query('DELETE FROM sucursales WHERE sucursalCode = ?', id, cb);
    }

    deleteCar(id, cb) {
        conexion.query('DELETE FROM cars WHERE productCode = ?', id, cb);
    }

    deleteEmployee(id, cb) {
        conexion.query('DELETE FROM employees WHERE idEmployeed = ?', id, cb);
    }

    saveUser(data, cb) { 
        conexion.query('SELECT * FROM employees WHERE idEmployeed = ?', data.idEmployeed, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conexion.query('UPDATE employees SET ? WHERE idEmployeed = ?', [data, data.idEmployeed], cb)
                    : conexion.query('INSERT INTO employees SET ?', data, cb);
        });
    }
}

module.exports = TeamModel;