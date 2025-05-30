db = db.getSiblingDB('plp_bookstore');
db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 45,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 40,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    published_year: 2015,
    price: 30,
    in_stock: true,
    pages: 278,
    publisher: "O’Reilly Media"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 15,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 25,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 20,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    published_year: 2016,
    price: 22,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 18,
    in_stock: false,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 30,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 35,
    in_stock: true,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  }
])
