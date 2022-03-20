const db = require('../db/connection');

function getAllRoles() {
    return new Promise(function(resolve, reject) {
        const sql = `SELECT roles.id, roles.title, departments.name AS department,
        roles.salary FROM roles
        LEFT JOIN departments ON roles.department_id = departments.id`;

        db.query(sql, function(err, rows) {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

function addNewRole(data) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO roles (title, salary, department_id)
        VALUES (?, ?, ?)`;

        db.query(
            sql, [data.title, data.salary, data.department_id],
            (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(`Added ${data.title} to the database.`);
            }
        );
    });
}

module.exports = {
    getAllRoles,
    addNewRole
}