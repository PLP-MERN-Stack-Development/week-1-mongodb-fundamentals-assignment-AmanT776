// Find all books in a specific genre
db.books.find({ genre: "Programming" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "James Clear" });

// Update the price of a specific book
db.books.updateOne({ title: "Atomic Habits" }, { $set: { price: 28 } });

// Delete a book by its title
db.books.deleteOne({ title: "1984" });

// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: title, author, and price only
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 });

// Sort by price ascending
db.books.find().sort({ price: 1 });

// Sort by price descending
db.books.find().sort({ price: -1 });

// Pagination: Page 1 (limit 5)
db.books.find().limit(5);

// Pagination: Page 2 (skip 5, limit 5)
db.books.find().skip(5).limit(5);

// Aggregation: average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avg_price: { $avg: "$price" } } }
]);

// Aggregation: author with most books
db.books.aggregate([
  { $group: { _id: "$author", total_books: { $sum: 1 } } },
  { $sort: { total_books: -1 } },
  { $limit: 1 }
]);
// Aggregation: group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [ { $substr: ["$published_year", 0, 3] }, "0s" ] },
      count: { $sum: 1 }
    }
  }
]);

// Indexing
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: -1 });

// Performance check
db.books.find({ title: "Sapiens" }).explain("executionStats");
