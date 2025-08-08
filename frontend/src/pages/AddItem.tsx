import { useState } from 'react';
import api from '../lib/api';

const AddItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post('/items', { name, quantity });
    setName('');
    setQuantity(0);
    alert('Item added!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 w-full" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" className="border p-2 w-full" />
      <button className="bg-blue-600 text-white px-4 py-2">Add</button>
    </form>
  );
};

export default AddItem;
