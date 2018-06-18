// var mysql = require('promise-mysql');
// var conexion;

// mysql.createConnection({
// host: '192.168.1.133',
// user: 'fidel',
// password: 'lagunas242',
// database: 'pi18team2'
// }).then(function(conn,err){
// var result = conn.query('select * from cars');
// // conn.end();
// // console.log(JSON.stringify(result,undefined,2));
// conexion=conn;
// conn.end();
// return result;
// }).then(function(rows){
// // Logs out a list of hobbits
// console.log(rows);
// }).catch(err => {
// mysql.createConnection({
// host: '192.168.1.143',
// user: 'fidel',
// password: 'lagunas242',
// database: 'cars'}).then(function(conn,err){
// var result=conn.query('select * from cars');
// conexion=conn;
// conn.end();
// return result;
// }).then(function(rows){
// console.log(rows);
// })
// })
// /*
// return result;
// }).catch(err => console.log(err))
// */
// module.exports = conexion



const mysql = require('mysql'),
    conf = require('./db_conf'),
    dbOptions = {
        host: conf.mysql.host,
        user: conf.mysql.user,
        password: conf.mysql.password,
        port: conf.mysql.port,
        database: conf.mysql.db 
    },

    conn = mysql.createConnection(dbOptions);

conn.connect( (err) => {
    return (err)
        // True
        ? console.log(`Error al conectarse a la base de datos: ${err.starck}`)
        // False
        : console.log(`Conexión establecida con la base de datos N°: ${conn.threadId}`);
});

module.exports = conn;


// const mysql = require('mysql'),
//     conf = require('./db_conf'),
//     dbOptions = {
//         host: conf.mysql.host,
//         user: conf.mysql.user,
//         password: conf.mysql.password,
//         port: conf.mysql.port,
//         database: conf.mysql.db 
//     },

//     dbOptions4 = {
//         host: conf.team4.host,
//         user: conf.team4.user,
//         password: conf.team4.password,
//         port: conf.team4.port,
//         database: conf.team4.db 
//     },

//     conn = mysql.createConnection(dbOptions);
//     conn4 = mysql.createConnection(dbOptions4);
//     let conection = conn;

// conection.connect( conexion = function(err) {

//     if(err) {
//         conn4.connect ((err) => {
//             console.log(`Conexión establecida con la base de datos N°: ${conn.threadId} (Equipo 4)`)
//             conection = conn4;
//         })
//     } else {
//         console.log(`Conexión establecida con la base de datos N°: ${conn.threadId} (Equipo 2)`)
//         conection = conn;
//     }

//     return conection;
//     // return (err)
//     //     // True
//     //     ? coon4.connect( (err) => {
//     //         console.log(`Conexión establecida con la base de datos N°: ${conn.threadId} (Equipo 4)`)
//     //     })
//     //     // False
//     //     : console.log(`Conexión establecida con la base de datos N°: ${conn.threadId} (Equipo 2)`);
// });


// module.exports = conection;