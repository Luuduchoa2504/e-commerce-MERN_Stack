import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { RegisterForm } from './components/Register/RegisterForm'
import { LoginForm } from './components/Login/LoginForm'
import LoginAd from './pages/Admin/LoginAd'
import ProductPage from './pages/Product/ProductPage';
import DetailProduct from './pages/detailProduct/DetailProduct'
import AuthContextProvider from './contexts/AuthContext';
import HomeAdmin from './pages/Admin/HomeAdmin';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/product" element={< ProductPage/>} />
          <Route path="/detail/:id" element={< DetailProduct/>} />
          <Route path="/admin" element={< LoginAd/>} />
          <Route path="/Home" element={<HomeAdmin/>} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
