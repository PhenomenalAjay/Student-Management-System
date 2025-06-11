const mysql = require('mysql2');

//mySQL connection
const con = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


exports.view = (req, res) => {
    //check connection
    con.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('select * from users', (err, rows) => {
            connection.release(); //release connection back to pool
            if (!err) {
                res.render('home', { rows });
            } else {
                console.log('error in listing data' + err);
            }
        })
    })
    // Removed the extra res.render('home') call here to fix the error
};
exports.adduser = (req, res) => {
    res.render('adduser');
}

exports.save = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        const { name, age, city } = req.body;

        connection.query('insert into users (name,age,city) values(?,?,?)', [name, age, city], (err, rows) => {
            connection.release(); //release connection back to pool
            if (!err) {
                res.render('adduser', { msg: "user details added successfully" });
            } else {
                console.log('error in listing data' + err);
            }
        })
    })
}

exports.edituser = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        const id = req.params.id;
        connection.query('select * from users where id=?', [id], (err, rows) => {
            connection.release(); //release connection back to pool

            if (!err) {
                res.render('edituser', { rows });
            } else {
                console.log('error in listing data' + err);
            }
        })
    })
}

exports.edit = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        const { name, age, city } = req.body;
        const id = req.params.id;
        connection.query('update users set name=?,age=?,city=? where id=?', [name, age, city,id], (err, rows) => {
            connection.release(); //release connection back to pool
            if (!err) {
                    con.getConnection((err, connection) => {
        if (err) throw err;
        const id = req.params.id;
        connection.query('select * from users where id=?', [id], (err, rows) => {
            connection.release(); //release connection back to pool

            if (!err) {
                   
                res.render('edituser', {rows, msg: "user details update successfully" });
            } else {
                console.log('error in listing data' + err);
            }
        })
    })
            } else {
                console.log('error in listing data' + err);
            }
        })
    })
}

exports.delete = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        const id = req.params.id;
        
        connection.query('delete from users where id=?', [id], (err, rows) => {
            connection.release(); //release connection back to pool
            if (!err) {
                res.redirect('/');
            } else {
                console.log('error in listing data' + err);
            }
        })
    })
}