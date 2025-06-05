import React from 'react';
import p1 from '../assets/projects/p1.PNG';
import p2 from '../assets/projects/p2.PNG';
import p3 from '../assets/projects/p3.PNG';

const Services = () => (
  <div className="text-center mt-20">
    <h2 className="text-3xl font-semibold text-teal-800" data-aos="fade-up">My Projects</h2>
    <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
      <div
        className="bg-white shadow-md p-2 rounded-xl border border-teal-200 hover:shadow-xl transition"
        data-aos="zoom-in"
      >
        <img src={p1} alt="Service 1" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold text-teal-700">E-commerce Website</h3>
        <p className="mt-2 text-sm text-teal-800">
          A personal website built with React and Tailwind CSS.
        </p>
      </div>
      <div
        className="bg-white shadow-md p-2 rounded-xl border border-teal-200 hover:shadow-xl transition"
        data-aos="zoom-in"
      >
        <img src={p2} alt="Service 2" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold text-teal-700">Educational Website</h3>
        <p className="mt-2 text-sm text-teal-800">
        A personal website built with React and Tailwind CSS.
        </p>
      </div>
      <div
        className="bg-white shadow-md p-2 rounded-xl border border-teal-200 hover:shadow-xl transition"
        data-aos="zoom-in"
      >
  <img src={p3} alt="Service 3" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold text-teal-700">E-commerce Website</h3>
        <p className="mt-2 text-sm text-teal-800">
         A personal website built with React and Tailwind CSS.
        </p>
      </div>
    </div>
  </div>
);

export default Services;
