USE meal_share_db;

----------Meal----------

-- Get all meals
SELECT * 
FROM meal;

--Add a new meal
INSERT INTO `meal` (`title`, `description`, `location`, `when`, `max_reservation`, `price`,`created`) VALUES ('Chicken tangine', "This chicken tagine is great eaten with cous cous for something a bit more filling", 'Copenhagen', "2022-02-14 12:35:25", 4, 178.00 , "2022-2-16");

-- Get a meal with any id, fx 1
SELECT * 
FROM meal WHERE id = 5;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `meal` 
SET `location` = 'Morroco' 
WHERE `location` = 'Copenhagen';

-- Delete a meal with any id, fx 1
DELETE 
FROM `meal` 
WHERE id = 5;

---------------Reservation-----------------

-- Get all reservations
SELECT * 
FROM reservations;

-- Add a new reservation
INSERT INTO `reservations` (`id`,`number_of_guests`, `meal_id`,  `created_date`,`contact_phonenumber`,`contact_name`, `contact_email`)
 values  (6,3, 6, "2022-2-15", "(307) 2713-1129", "Carlo Ancelloti", "carloA.ca@hotmail.net");

-- Get a reservation with any id, fx 1
SELECT * 
FROM reservations 
WHERE id = 6;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `reservations` 
SET `contact_name` = 'Abaha was' 
WHERE `contact_name` = 'Jenna Taylor';

-- Delete a reservation with any id, fx 1
DELETE 
FROM reservations 
WHERE id = 5;


--------------Review-------------

-- Get all reviews
SELECT * 
FROM review;

-- Add a new review
INSERT INTO `review` (id,`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES
  (6,"Yeeeees!!!!", "I've got a fetish for good food and this place gets me hot! Everything was simply decadent. The waiter was prompt and polite. Easily earned their 5 stars!
", 6,5, "2022-2-16");

-- Get a review with any id, fx 1
SELECT * 
FROM review 
WHERE id = 6;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET meal_id = 1 WHERE meal_id = 6;

-- Delete a review with any id, fx 1
DELETE FROM `review` WHERE stars = 2;
