const db = require("../db/connection");

function getAllDepartments() {
    return new Promise(function(resolve, reject) {
        const sql = "SELECT departments.id, departments.name AS department FROM departments";

        db.query(sql, function(err, rows) {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

function addNewDepartment(data) {
    return new Promise(function(resolve, reject) {
        const sql = "INSERT INTO departments (name) VALUES (?)";

        db.query(sql, [data.name], function(err, rows) {
            if (err) {
                return reject(err);
            }
            resolve(`Added ${data.name} to the database.`);
        });
    });
}

module.exports = {
    getAllDepartments,
    addNewDepartment
};