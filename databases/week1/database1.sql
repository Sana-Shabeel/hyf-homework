--1
SELECT COUNT(id) FROM task;

--2
SELECT COUNT(id) FROM task WHERE due_date IS NULL;


--check task ADD
SELECT * FROM task;
SELECT * from status;

--3
SELECT * FROM task WHERE status_id = 3;
--4
SELECT * FROM task WHERE status_id <> 3 ;

--5
SELECT * FROM task ORDER BY created DESC;

--6
SELECT * FROM task ORDER BY created DESC LIMIT 1;

--7
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

--8
SELECT task.status_id, task.title, status.name FROM task JOIN status ON task.status_id = status.id;

--9
SELECT COUNT(task.id), status.name FROM task JOIN status ON status.id = task.status_id GROUP BY status.name;

SELECT COUNT(task.id), status.name FROM task  
JOIN status ON status.id = task.status_id  GROUP BY status.name ORDER BY COUNT(task.id) DESC ;