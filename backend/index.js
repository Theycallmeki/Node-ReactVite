const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Import SQLite database from db.js

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route (to avoid "Cannot GET /" in browser)
app.get('/', (req, res) => {
  res.send('Backend API is running!');
});

// 📦 READ all users
app.get('/users', (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// ➕ CREATE new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, email });
  });
});

// 📝 UPDATE user by ID
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  db.run("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: req.params.id, name, email });
  });
});

// ❌ DELETE user by ID
app.delete('/users/:id', (req, res) => {
  db.run("DELETE FROM users WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: true });
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
