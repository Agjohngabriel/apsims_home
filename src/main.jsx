import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './styles/global.css'
import './styles/phone.css'
import App from './App.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import Investors from './pages/Investors.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apps" element={<ComingSoon />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
