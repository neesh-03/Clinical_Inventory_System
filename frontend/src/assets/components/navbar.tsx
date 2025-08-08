import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/inventory">Inventory</Link>
      <Link to="/add">Add Item</Link>
      <Link to="/low-stock">Low Stock</Link>
      <Link to="/expiring">Expiring Soon</Link>
      <Link to="/restocking">Restocking</Link>
      <Link to="/stock-in">Stock In</Link>
      <Link to="/stock-out">Stock Out</Link>
    </nav>
  );
};

export default Navbar;
