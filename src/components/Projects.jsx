import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React and Tailwind CSS.",
      link: "https://example.com/portfolio",
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce application with a React frontend and Node.js backend.",
      link: "https://example.com/ecommerce",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeatherMap API.",
      link: "https://example.com/weather",
    },
    {
      title: "Blog Platform",
      description: "A blog platform where users can create and share blog posts.",
      link: "https://example.com/blog",
    },
  ];

  return (
    <section 
      id="projects" 
      className="bg-gray-100 text-gray-900 w-full"
    >
      <div className="flex-1 w-full px-6 py-12">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
              </div>
              <a
                href={project.link}
                className="inline-block text-blue-600 hover:text-blue-800 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
