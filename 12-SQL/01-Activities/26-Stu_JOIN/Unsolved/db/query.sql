-- Add your code below and execute file in MySQL Shell --
SELECT favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;

SELECT movies.movie_name AS name, reviews.review AS review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id
ORDER BY 