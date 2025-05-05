const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = 3001; // Changed to avoid React dev server port conflict (assuming React runs on 3000)

app.use(cors()); // Enable all origins for CORS
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve the admin panel on the root URL
app.get('/', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.render('admin', { users: rows });
  });
});

// CREATE
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.run(query, [name, email], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, email });
  });
});

// READ ALL
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows); // Return users data
  });
});

// UPDATE
app.put('/api/users/:id', (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.run(query, [name, email, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, name, email });
  });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM users WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User deleted' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
