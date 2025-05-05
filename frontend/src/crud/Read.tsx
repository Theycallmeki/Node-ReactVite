import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Read() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users').then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}
