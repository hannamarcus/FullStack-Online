SELECT favorite_books.book_name AS name, book_prices.prive AS name price
FROM course_names
JOIN department ON course_names.department = department.id;
ORDER BY course_names.name;