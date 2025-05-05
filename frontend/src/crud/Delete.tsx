import { useState } from 'react';
import axios from 'axios';

export default function Delete() {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:3000/api/users/${id}`);
    alert('User deleted!');
  };

  return (
    <form onSubmit={handleDelete}>
      <h2>Delete User</h2>
      <input placeholder="User ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <button type="submit">Delete</button>
    </form>
  );
}
