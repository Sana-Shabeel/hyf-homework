CREATE DATABASE hyf_lesson2;
USE hyf_lesson2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.email FROM task JOIN user_task ON task.id = user_task.task_id JOIN user ON user_task.user_id = user.id
WHERE email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT  task.id ,task.title,status.name AS status_name, user.name AS user_name
FROM task 
JOIN status ON task.status_id = status.id 
JOIN user_task ON task.id = user_task.task_id 
JOIN user ON user_task.user_id = user.id 
WHERE user.name LIKE 'Donald Duck' AND status.name = 'Not started';


-- Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT task.title, MONTH(created), user.name 
FROM task JOIN user_task ON task.id = user_task.task_id JOIN user ON user_task.user_id = user.id WHERE user.name = 'Maryrose Meadows' AND MONTH(created) = '09';

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november

SELECT COUNT(task.id) AS Total_count,  MONTH(created) AS Month
FROM task  
GROUP BY MONTH(created) 
ORDER BY COUNT(created);
