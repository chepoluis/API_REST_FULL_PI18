let LocalStrategy = require('passport-local').Strategy;
const conn = require('../models/./model');
//let mysql = require('mysql');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });


    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    passport.use(new LocalStrategy({
        passReqToCallback : true
    }, function(req, email, password, done) {

        //let config = require('.././models/model');
        //let db = mysql.createConnection(config);
        //db.connect();

        conn.query('SELECT * FROM employees WHERE email = ?', email, function(err, rows, fields) {
            if(err) throw err;

            //db.end();            //db.end();

            if(rows.length > 0) {
                
                let user = rows[0];
                if(password == user.password) {
                    return done(null, {
                        id: user.id,
                        completeName : user.completeName,
                        email : user.email
                    });
                }
            }

            return done(null, false, req.flash('authmessage', 'Email o password incorrectos.'));
        });

    }
    ));

};