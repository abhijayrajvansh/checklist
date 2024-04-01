CREATE DATABASE checklistapp;

CREATE TABLE checklists (
  id VARCHAR(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);

-- create/insert syntax
INSERT INTO checklists(
  id, user_email, title, progress, date
) VALUES(
  '0', 'abhijay@test.com', 'modified first checklist', 12, '2024-04-01'
);


INSERT INTO checklists (id, user_email, title, progress, date) VALUES ('4', 'abhijay@test.com', 'another checklist from express', 50, '2024-03-28');



-- Read syntax
SELECT * FROM checklists;

-- update/edit syntax
UPDATE checklists SET user_email = '', title = '', progress = 100 WHERE id = '';

UPDATE checklists SET user_email = 'abhijay@test.com', title = 'modified checklist', progress = 80 WHERE id = '0';

-- delete syntax
DELETE FROM checklists WHERE id = '0';
