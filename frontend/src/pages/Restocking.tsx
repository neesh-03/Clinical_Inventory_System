import { useEffect, useState } from 'react';
import api from '../lib/api';

const Restocking = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    api.get('/alerts/restocking').then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Restocking Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - Restock Date: {item.restockDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restocking;
