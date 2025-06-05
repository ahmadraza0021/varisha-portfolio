import { Link } from 'react-router-dom';
import logoorrr from '../assets/projects/logoorrr.PNG';

const Navbar = () => (
  <nav className="bg-teal-700 text-white p-2 shadow-lg fixed w-full top-0 z-50">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-2xl sm:text-3xl">Varisha Portfolio</h1>
         <img
          src={logoorrr}
          alt="MERN Logo"
          className="w-32 h-16 object-contain"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-lg">
        <li><Link to="/" className="hover:text-teal-300 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-teal-300 transition">About</Link></li>
        <li><Link to="/services" className="hover:text-teal-300 transition">Projects</Link></li>
        <li><Link to="/skills" className="hover:text-teal-300 transition">Skills</Link></li>
        <li><Link to="/contact" className="hover:text-teal-300 transition">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
