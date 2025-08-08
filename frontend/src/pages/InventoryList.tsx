import { useEffect, useState } from 'react';
import api from '../lib/api';

const InventoryList = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    api.get('/items').then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Inventory</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - Qty: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
