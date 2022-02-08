USE dc;

CREATE TABLE super_hero(
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);

DESCRIBE super_hero;

CREATE TABLE super_power(
    id INT(10) NOT NULL AUTO_INCREMENT,
    power VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);
DESCRIBE super_power;

CREATE TABLE `hero_power`(
    `hero` INT(10) NOT NULL ,
    `power` INT(10) NOT NULL,
    PRIMARY KEY(`hero`, `power`),
    FOREIGN KEY (`hero`) REFERENCES `super_hero` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`power`) REFERENCES `super_power` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
DESCRIBE super_power;


