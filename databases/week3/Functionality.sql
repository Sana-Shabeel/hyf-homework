USE meal_share_db;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price < 90; 

-- Get meals that still has available reservations
SELECT meal.title, meal.description, meal.max_reservation 
FROM meal  JOIN reservations ON meal.id = reservations.meal_id 
WHERE max_reservation > number_of_guests;

-- Get meals that partially match a title
SELECT * 
FROM meal 
WHERE title LIKE '%chicken%';

-- Get meals that has been created between two dates
SELECT * FROM meal 
WHERE created BETWEEN '2022-02-15' AND 
'2022-02-16';


-- Get only specific number of meals fx return only 5 meals
SELECT * 
FROM meal 
LIMIT 3;

-- Get the meals that have good reviews
SELECT meal.title, meal.description, meal.location, meal.price , stars FROM meal JOIN review ON meal.id = review.meal_id WHERE stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT reservations.contact_name,  reservations.contact_phonenumber, reservations.created_date
FROM reservations JOIN meal ON meal.id = reservations.meal_id 
WHERE meal.title LIKE 'Butter chicken' ORDER BY meal.created;


-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, meal.description, meal.location, meal.price, AVG(review.stars ) 
FROM meal JOIN review ON meal.id = review.meal_id 
GROUP BY review.meal_id 
ORDER BY AVG(review.stars)

