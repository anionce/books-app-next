export const NY_TIMES_ENDPOINT = 'https://api.nytimes.com/svc/books/v3/';

export const GET_BOOKS_ENDPOINT = `${NY_TIMES_ENDPOINT}/lists/2023-07-01/combined-print-and-e-book-fiction.json?api-key=${process.env.NY_TIMES_API_KEY}`;
