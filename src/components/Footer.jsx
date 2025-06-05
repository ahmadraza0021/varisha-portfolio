import { MdEmail, MdPhone } from "react-icons/md";
const Footer = () => (
  <footer className="bg-teal-700 text-white text-center py-4 mt-auto">
    <p className="text-sm sm:text-base">
      © 2025 Varisha.All rights reserved. Built using React & Tailwind.</p>
      
      <p>
          <MdEmail className="inline mr-2 text-white align-middle" />
          varishashah66@gmail.com
        </p>
        <p>
           <MdPhone className="inline mr-2 text-white align-middle" />
           03445472660
    </p>
  </footer>
);

export default Footer;
