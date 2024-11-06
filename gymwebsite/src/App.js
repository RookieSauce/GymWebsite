import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './/pages/Homepage';
import NoPage from './pages/NoPage'
import './App.css';
import ContactUs from "./pages/ContactUs";

function App() {
  // This router does not work yet...
  return (
    <div>
      <Router>
        <Routes>
         <Route index element={<Homepage />} />            {/* Default page */}
         <Route path="/home" element={<Homepage />} />     {/* Homepage */}
         <Route path="/contact" element={<ContactUs />} /> {/* Contact Us */}
         <Route path="*" element={<NoPage />} />           {/* Error 404 page */}
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
