const Home = () => (
  <div className="text-center mt-20" data-aos="fade-up">
    <h1 className="text-5xl font-bold text-teal-800">Hi, I'm Varisha 👋</h1>
    <p className="mt-4 text-xl text-teal-600">MERN Stack Developer | Creating Modern Websites</p>
    <div className="mt-6 space-x-4">
      <a href="/services" className="bg-teal-600 text-white px-6 py-2 rounded-md shadow hover:bg-teal-700 transition">
        View Projects
      </a>
      <a href="/contact" className="border border-teal-600 text-teal-600 px-6 py-2 rounded-md hover:bg-teal-100 transition">
        Contact Me
      </a>
    </div>
  </div>
);

export default Home;
