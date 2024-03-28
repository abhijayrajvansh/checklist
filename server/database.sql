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

INSERT INTO checklists(
  id, user_email, title, progress, date
) VALUES(
  '1', 'abhijay@test.com', 'macbook local checklist', 3, '2024-03-28'
);

