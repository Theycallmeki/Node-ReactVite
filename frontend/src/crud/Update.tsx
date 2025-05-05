import { useState } from 'react';
import axios from 'axios';

export default function Update() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/users/${id}`, { name, email });
    alert('User updated!');
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update User</h2>
      <input placeholder="User ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <input placeholder="New Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="New Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Update</button>
    </form>
  );
}
