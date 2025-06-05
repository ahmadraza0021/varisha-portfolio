const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully! 💌");
  };

  return (
    <div className="text-center mt-20 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-semibold text-teal-800">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          className="w-full px-4 py-2 border rounded-md border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 border rounded-md border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
