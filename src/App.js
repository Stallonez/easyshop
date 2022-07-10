import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Notebooks from './components/Notebooks/Notebooks';
import ShopingCart from './components/ShopingCart/ShopingCart';
import Tablets from './components/Tablets/Tablets';
// логика реакта состоит в компонентах

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Header />
          {/* <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/card" element={<ShopingCart />} />
        </Routes> */}
          <Routes>
            <Route path="/notebooks" element={<Notebooks />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/cart" element={<ShopingCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
