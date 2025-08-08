import { useState } from 'react';
import api from '../lib/api';

const StockIn = () => {
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState<number>(0);

  const handleStockIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post(`/stock/in`, { id, quantity });
    alert('Stock updated!');
  };

  return (
    <form onSubmit={handleStockIn} className="space-y-4">
      <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Item ID" className="border p-2 w-full" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" className="border p-2 w-full" />
      <button className="bg-purple-600 text-white px-4 py-2">Stock In</button>
    </form>
  );
};

export default StockIn;
