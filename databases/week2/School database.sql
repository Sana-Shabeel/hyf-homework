USE school_database;

--Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `class` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
      `name` VARCHAR(40) NOT NULL,
      `begins` DATETIME NOT NULL ,
      `ends` DATETIME NOT NULL,
      PRIMARY KEY(`id`)
);

DESCRIBE class;

--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `class_id` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(class_id) REFERENCES `class`(id) ON DELETE CASCADE
);

DESCRIBE student;

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE class ADD `status` INT(10);