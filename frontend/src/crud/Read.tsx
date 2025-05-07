import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Read() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users').then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>User List shows id </h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>ID:</strong> {u.id} — <strong>Name:</strong> {u.name} — <strong>Email:</strong> {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
