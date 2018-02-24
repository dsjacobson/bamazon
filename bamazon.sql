DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NULL,
	department_name VARCHAR(45) NULL,
	price INT(6) NOT NULL,
	stock_quantity INT(3) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("baseball bat", "sports", 200.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("baseball glove", "sports", 225.00, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("baseball cleats", "sports", 75.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tent", "outdoors", 90.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cooler", "outdoors", 30.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("curb your enthusiasm", "dvd's", 20.00, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("entourage", "dvd's", 15.00, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("the soprano's", "dvd's", 45.00, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("elliptical", "fitness", 500.00, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tread mill", "fitness", 800.00, 8);