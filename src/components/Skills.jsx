import React from "react";

const Skills = () => {
  const skillsList = [
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "HTML5",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
    },
    {
      name: "Git",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C++",
      image: "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg",
    },
    {
      name: "Next.js",
      image: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
    },
    {
      name: "PostgreSQL",
      image: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    },
    {
      name: "NumPy",
      image: "https://icon.icepanel.io/Technology/svg/NumPy.svg",
    },
    {
      name: "Matplotlib",
      image: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
    },
    {
      name: "Matplotlib",
      image: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
    },
    {
      name: "Matplotlib",
      image: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
    },
    {
      name: "Matplotlib",
      image: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
    },
    {
      name: "Matplotlib",
      image: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
    },
    {
      name: "Matplotlib",
      image: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 text-gray-900 w-full pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-500 font-calibri">My Skills</h2>
        <hr className="border-t-2 border-gray-300 mb-4 mx-auto" />

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
