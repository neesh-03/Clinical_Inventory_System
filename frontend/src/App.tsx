import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './assets/components/navbar';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';
import ExpiringSoon from './pages/ExpiringSoon';
import InventoryList from './pages/InventoryList';
import LowStock from './pages/LowStock';
import Restocking from './pages/Restocking';
import StockIn from './pages/StockIn';
import StockOut from './pages/StockOut';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/inventory" />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
          <Route path="/expiring" element={<ExpiringSoon />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/low-stock" element={<LowStock />} />
          <Route path="/restocking" element={<Restocking />} />
          <Route path="/stock-in" element={<StockIn />} />
          <Route path="/stock-out" element={<StockOut />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
