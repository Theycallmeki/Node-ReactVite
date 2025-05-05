const sqlite3 = require('sqlite3').verbose();

// Use a file-based SQLite database instead of in-memory
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");
});

module.exports = db;
