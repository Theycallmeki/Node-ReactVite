const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

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
    res.json(rows);
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

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
