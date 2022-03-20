const inquirer = require("inquirer");

const {
    getAllDepartments,
    addNewDepartment,
} = require("./departments");
const { getAllRoles, addNewRole, } = require("./roles");
const {
    getAllEmployees,
    addNewEmployee,
    updateEmployeesRole,
} = require("./employees");
const cTable = require("console.table");

class CMS {
    getMenu() {
            return inquirer
                .prompt([{
                    type: "list",
                    name: "menu",
                    message: "What would you like to do?",
                    choices: [
                        "View All Departments",
                        "View All Roles",
                        "View All Employees",
                        "Add Department",
                        "Add Role",
                        "Add Employee",
                        "Update Employee Role",
                        "Exit",
                    ],
                }, ])
                .then((answer) => {
                    switch (answer.menu) {
                        case "View All Departments":
                            this.viewAllDepartments();
                            break;
                        case "View All Roles":
                            this.viewAllRoles();
                            break;
                        case "View All Employees":
                            this.viewAllEmployees();
                            break;
                        case "Add Employee":
                            this.addEmployee();
                            break;
                        case "Add Department":
                            this.addDepartment();
                            break;
                        case "Add Role":
                            this.addRole();
                            break;
                        case "Update Employee Role":
                            this.updateEmployeeRole();
                            break;
                        case "Exit":
                            console.log('Goodbye!');
                            process.exit();
                    }
                });
        }
        // To view departments, get departments from db then write in table, repeat
    viewAllDepartments() {
            getAllDepartments().then((departments) => {
                const table = cTable.getTable(departments);
                console.log(table);
                this.getMenu();
            });
        }
        // To add department ask user for department name then insert with sql
    addDepartment() {
            inquirer
                .prompt([{
                    type: "input",
                    name: "name",
                    message: "What is the department name?",
                }, ])
                .then((answer) => {
                    addNewDepartment(answer).then((role) => {
                        console.log(role);
                        this.getMenu();
                    });
                });
        }
        

    viewAllRoles() {
        getAllRoles().then((roles) => {
            const table = cTable.getTable(roles);
            console.log(table);
            this.getMenu();
        });
    }

    addRole() {
        getAllDepartments().then((departments) => {
            const departmentChoices = departments.map((department) => {
                return {
                    name: department.department,
                    value: department.id,
                };
            });
            inquirer
                .prompt([{
                        type: "input",
                        name: "title",
                        message: "What is the name of the role?",
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "What is the salary for this role?",
                    },
                    {
                        type: "list",
                        name: "department_id",
                        message: "Which department does the role belong to?",
                        choices: departmentChoices,
                    },
                ])
                .then((answer) => {
                    addNewRole(answer).then((role) => {
                        console.log(role);
                        this.getMenu();
                    });
                });
        });
    }

    viewAllEmployees() {
        getAllEmployees().then((employees) => {
            const table = cTable.getTable(employees);
            console.log(table);
            this.getMenu();
        });
    }

    addEmployee() {
        Promise.all(getAllRoles()).then(
            ([roles, employees]) => {
                const roleChoices = roles.map((role) => {
                    return {
                        name: role.title,
                        value: role.id,
                    };
                });
                const managerChoices = employees.map((employee) => {
                    return {
                        name: `${employee.first_name} ${employee.last_name} - ${employee.title}`,
                        value: employee.id,
                    };
                });
                managerChoices.unshift({ name: "None", value: null });
                inquirer
                    .prompt([{
                            type: "input",
                            name: "first_name",
                            message: "What is the employee's first name?",
                        },
                        {
                            type: "input",
                            name: "last_name",
                            message: "What is the employee's last name?",
                        },
                        {
                            type: "list",
                            name: "role_id",
                            message: "What is the employee's role?",
                            choices: roleChoices,
                        },
                        {
                            type: "list",
                            name: "manager_id",
                            message: "Who is the employee's manager?",
                            choices: managerChoices,
                        },
                    ])
                    .then((answer) => {
                        addNewEmployee(answer).then((employee) => {
                            console.log(employee);
                            this.getMenu();
                        });
                    });
            }
        );
    }

    updateEmployeeRole() {
        Promise.all([getAllRoles(), getAllEmployees()]).then(
            ([roles, employees]) => {
                const roleChoices = roles.map((role) => {
                    return {
                        name: role.title,
                        value: role.id,
                    };
                });
                const employeeChoices = employees.map((employee) => {
                    return {
                        name: `${employee.first_name} ${employee.last_name}`,
                        value: employee.id,
                    };
                });
                inquirer
                    .prompt([{
                            type: "list",
                            name: "id",
                            message: "Which employee would you like to update?",
                            choices: employeeChoices,
                        },
                        {
                            type: "list",
                            name: "role_id",
                            message: "What is the employee's new role?",
                            choices: roleChoices,
                        },
                    ])
                    .then((answer) => {
                        const data = {
                            employee: employeeChoices.filter(
                                (employee) => employee.value === answer.id
                            )[0],
                            role: roleChoices.filter(
                                (role) => role.value === answer.role_id
                            )[0],
                        };
                        updateEmployeesRole(data).then((employee) => {
                            console.log(employee);
                            this.getMenu();
                        });
                    });
            }
        );
    }    
}

module.exports = CMS;