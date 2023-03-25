
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './component/AboutPage';
import HomePage from './page/HomePage/HomePage';
import Product from './page/ProductPage/Product';
import Contact from './page/ContactPage/Contact';
import Header from './component/Header';

function App() {
  const name = 'Ravi'
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage name={name} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
