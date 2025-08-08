import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../lib/api';

const EditItem = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    api.get(`/items/${id}`).then((res) => {
      setName(res.data.name);
      setQuantity(res.data.quantity);
    });
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.put(`/items/${id}`, { name, quantity });
    alert('Item updated!');
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 w-full" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" className="border p-2 w-full" />
      <button className="bg-green-600 text-white px-4 py-2">Update</button>
    </form>
  );
};

export default EditItem;
