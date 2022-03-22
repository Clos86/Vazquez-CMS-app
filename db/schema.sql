DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) NULL
);

CREATE TABLE roles (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30),
     salary DECIMAL,
     department_id INTEGER,
     CONSTRAINT fk_department 
     FOREIGN KEY (department_id) 
     REFERENCES departments(id)
);

CREATE TABLE employees (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INTEGER,
     manager_id INTEGER REFERENCES employees(id),
     CONSTRAINT fk_role 
     FOREIGN KEY (role_id) 
     REFERENCES roles(id)
);