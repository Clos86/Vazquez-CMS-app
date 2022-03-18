// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

const inquirer = require('inquirer');

const questions = () => {
return inquirer.prompt([
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
  {
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
  },
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
{
    type: "input",
    name: "name",
    message: "What is the department name?",
  },
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
  {
    type: "input",
    name: "title",
    message: "What is the name of the role?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary for this role?",
  },
//   {
//     type: "list",
//     name: "department_id",
//     message: "Which department does the role belong to?",
//     choices: departmentChoices,
//   },

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?",
  },

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
//   {
//     type: "list",
//     name: "role_id",
//     message: "What is the employee's role?",
//     choices: roleChoices,
//   },
//   {
//     type: "list",
//     name: "manager_id",
//     message: "Who is the employee's manager?",
//     choices: managerChoices,
//   },
//   {
//     type: "list",
//     name: "id",
//     message: "Which employee needs a role updated?",
//     choices: employeeChoices,
//   },
]);
};

questions();