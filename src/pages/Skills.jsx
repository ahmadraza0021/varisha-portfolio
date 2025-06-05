import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNpm,
  FaDatabase,
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
  { name: 'npm', icon: <FaNpm className="text-red-700" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-green-700" /> },
];

const Skills = () => (
  <div className="text-center mt-20" data-aos="fade-up">
    <h2 className="text-3xl font-semibold text-teal-800 mb-6">My MERN Stack Skills</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
      {skills.map(({ name, icon }) => (
        <div
          key={name}
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-28 hover:shadow-xl transition cursor-default"
          data-aos="flip-left"
          data-aos-delay="100"
        >
          <div className="text-6xl mb-3">{icon}</div>
          <p className="text-teal-700 font-semibold">{name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
