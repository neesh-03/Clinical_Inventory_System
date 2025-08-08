import { useEffect, useState } from 'react';
import api from '../lib/api';

const ExpiringSoon = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    api.get('/alerts/expiring').then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Expiring Soon</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - Expiry: {item.expiryDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpiringSoon;
