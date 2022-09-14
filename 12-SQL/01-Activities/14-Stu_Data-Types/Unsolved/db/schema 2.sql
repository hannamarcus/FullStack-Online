DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id NOT NULL,
  first_name NOT NULL,
  last_name NOT NULL,
  value_card_member NUMBER,
);
