import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Update() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  // Fetch all users when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!id) return alert('Please select a user ID');
    try {
      await axios.put(`http://localhost:3001/api/users/${id}`, { name, email });
      alert('User updated!');
    } catch (err) {
      console.error(err);
      alert('Failed to update user.');
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update User</h2>

      <select value={id} onChange={(e) => setId(e.target.value)} required>
        <option value="">Select User ID dropform</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.id} — {user.name}
          </option>
        ))}
      </select>

      <input
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="New Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Update</button>
    </form>
  );
}
