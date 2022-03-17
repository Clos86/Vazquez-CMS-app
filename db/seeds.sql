INSERT INTO department (name)
VALUES
    ('Marketing'),
    ('Operations'),
    ('Finance'),
    ('Sales'),
    ('Human Resource');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Lead Marketing', 150000, 1), 
    ('Operations Manager', 100000, 2),
    ('Operations Assistant', 50000, 2),
    ('Finance Manager', 130000, 3),
    ('Sales Manager', 120000, 4,
    ('Salesperson', 80000, 4),
    ('Human Resources Manager', 100000, 4), 
    ('Human Resources Assistant', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Julius', 'Ryan', 1, NULL), 
    ('Dangelo', 'Maddox', 2, NULL),
    ('Alec', 'Yates', 5, NULL),
    ('Laurel', 'Roberson', 7, NULL),
    ('Justine', 'Curry', 4, NULL),
    ('Kaylah', 'Richards', 3, 2), 
    ('Madelyn', 'Ellis', 3, 2), 
    ('Elianna', 'Kelley', 6, 3),
    ('Laurel', 'Carey', 8, 4), 
    ('Briley', 'Farrell', 3, 2),
    ('Lilly', 'Marsh', 6, 3), 
    ('Miracle', 'Jackson', 8, 4);