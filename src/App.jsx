import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookHuntPage from './Pages/BookHuntPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import CheckOutPage from './Pages/CheckOutPage';

import './App.css';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/book" element = {<BookHuntPage />} />
          <Route path = "/login" element = {<LoginPage />} />
          <Route path = "/signup" element = {<SignupPage />} />
          <Route path = "/cart" element = {<CheckOutPage />} />
        </Routes>
      </BrowserRouter>
  );
}
