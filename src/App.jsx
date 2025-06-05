import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './pages/Skills.jsx';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-teal-50 to-teal-100 min-h-screen text-teal-900 font-sans pt-16 flex flex-col">
        <Navbar />
        {/* Main content grows to push footer down */}
        <main className="p-6 max-w-7xl mx-auto flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
