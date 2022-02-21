CREATE DATABASE meal_share_db
 DEFAULT CHARACTER SET = 'utf8mb4';

USE meal_share_db;
CREATE TABLE `meal` (
 `id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
 `title` VARCHAR(50) NOT NULL,
 `description` TEXT NULL,
 `location` VARCHAR(50) NOT NULL,
 `when` DATETIME NOT NULL, 
 `max_reservation` INT(10) unsigned NOT NULL,
 `price` DECIMAL(10,2) NOT NULL,
 `created` DATE NOT NULL, 
 PRIMARY KEY(`id`)
);

DESCRIBE  meal;

CREATE TABLE `reservations` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `number_of_guests` INT(10) unsigned NOT NULL,
    `meal_id` INT(10) unsigned NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(70) NULL,
    `contact_name` VARCHAR(50) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

DESCRIBE reservations;

CREATE TABLE `review`(
    id INT(10) unsigned NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    meal_id INT(10) unsigned NOT NULL,
    stars INT(10) unsigned  NULL,
    created_date DATE NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

DESCRIBE review;

INSERT INTO `meal` (`title`, `description`, `location`, `when`, `max_reservation`,`price`, `created`)
VALUES
  ("Butter chicken", "The chicken can be marinaded the day before so you can get ahead on your prep", 'London', "2022-2-10 07:18:16", 4, 250.50, "2022-2-14"),
  ("Lasagne", "You will love to help assemble this amazing pasta baked with streaky bacon, beef mince", 'Rome', "2022-2-12 08:18:16", 6, 199.99, "2022-2-14"),
  ("Teriyaki chicken", "Try this, sticky Asian-style teriyaki chicken for a speedy weeknight supper", 'Tokyo', "2022-2-13 09:25:25", 2, 100.99, "2022-2-14"),
  ("Huevos ranchos", "An easy Mexican breakfast that'll keep you going all morning", 'Mexico', "2022-2-10 10:35:25", 1, 70.99, "2022-2-14"),
  ("Vegetarian chilli", "The best chilli you'll have, with ready-to-eat grains, kidney beans in chilli sauce and summer veggies", "New York", "2022-2-14 12:35:25", 3, 300.00, "2022-2-14");



INSERT INTO `reservations` (`id`,`number_of_guests`, `meal_id`,  `created_date`,`contact_phonenumber`,`contact_name`, `contact_email`)
VALUES
  (1,3, 2, "2022-2-13", "(207) 680-1129", "Ayanna Baird", "orci.ut@hotmail.net"),
  (2,2, 1, "2022-2-14", "1-282-393-7313", "Harding Sexton", "dictum.cursus.nunc@icloud.org"),
  (3,1, 4, "2022-2-10", "(484) 636-2256", "Madaline Warner", "sagittis.nullam@outlook.org"),
  (4,2, 5, "2022-2-10","1-374-985-5363", "Kyra Mccullough","quam@yahoo.edu"),
  (5,2, 3, "2022-2-10","1-774-778-3252", "Jenna Taylor", "pellentesque.tincidunt@protonmail.ca");




INSERT INTO `review` (id,`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES
  (1,"Would come again", "I have been here several times before. The entree I had was sublime", 3,3, "2022-2-15"),
  (2,"Undiscovered gem", "I found the entrees to be very agreeable to my personal flavor-profile.", 4,4, "2022-2-16"),
  (3,"Meh", "I asked for my steak medium, but it was still cold",3,2, "2022-2-17"),
  (4,"The best", "This was one of the best mouth-watering chicken I've had grace my taste buds in a long time. ", 1, 5, "2022-2-18"),
  (5,"Pleasantly surprised", "he waiter was prompt and polite. The appetizers must be sprinkled with crack because I just craved for more and more.", 2, 4, "2022-2-20");

