const db = require("../config/db");

exports.getAll = (req, res) => {
    const sqlQuery = "SELECT * FROM contact";
    db.query(sqlQuery, function (err, results) {
        res.json({ status: 200, payload: results });
    });
};

exports.add = (req, res) => {
    const sqlQuery = `INSERT INTO contact SET fullname = '${req.body.fullname}', phone = ${req.body.phone}, note = '${req.body.note}'`;
    db.query(sqlQuery, function (err, results) {
        res.json({ status: 200, payload: results });
    });
};

exports.getId = (req, res) => {
    const sqlQuery = `SELECT * FROM contact WHERE id=${req.params.id}`;
    db.query(sqlQuery, function (err, result) {
        res.json({ status: 200, payload: result });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const sqlQuery = `UPDATE contact SET fullname= '${req.body.fullname}', phone= ${req.body.phone}, note = '${req.body.note}' WHERE id = ${id} `;
    db.query(sqlQuery, function (err, result) {
        res.json({ status: 200, payload: result });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    const sqlQuery = `DELETE FROM contact  WHERE id = ${id} `;
    db.query(sqlQuery, function (err, result) {
        res.json({ status: 200, payload: result });
    });
};
