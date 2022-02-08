SELECT * FROM  task;
USE db_week1;
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title,description, created, updated, due_date, status_id, user_id) VALUES ('Watching TV', 'Season 8 of the blacklist', NOW() - INTERVAL 1 DAY , NOW(), NOW() + INTERVAL 3 DAY, 1, 10);

--Change the title of a task
UPDATE task SET title = 'Learn all about' WHERE id = 35;

--Change a task due date
UPDATE task SET due_date = NOW() WHERE id = 35;

--Change a task status
UPDATE task SET status_id = 2 WHERE id = 35;


--Mark a task as complete
UPDATE task SET status_id = 3 WHERE id = 35;

--Delete a task
DELETE FROM task  WHERE id = 34;

