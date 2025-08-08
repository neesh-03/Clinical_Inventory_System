import { useState } from 'react';
import api from '../lib/api';

const StockOut = () => {
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState<number>(0);

  const handleStockOut = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post(`/stock/out`, { id, quantity });
    alert('Stock reduced!');
  };

  return (
    <form onSubmit={handleStockOut} className="space-y-4">
      <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Item ID" className="border p-2 w-full" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" className="border p-2 w-full" />
      <button className="bg-red-600 text-white px-4 py-2">Stock Out</button>
    </form>
  );
};

export default StockOut;
