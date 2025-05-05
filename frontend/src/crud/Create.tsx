import { useState } from 'react';
import axios from 'axios';

export default function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/users', { name, email });
    setName('');
    setEmail('');
    alert('User created!');
  };

  return (
    <form onSubmit={handleCreate}>
      <h2>Create User</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Create</button>
    </form>
  );
}
