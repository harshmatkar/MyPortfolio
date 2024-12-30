import React from "react";
import myImage from "../assets/my-image.jpg";

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-900 mt-16 py-12" id="about">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 align-middle">
          <img
            src={myImage}
            alt="Harshawardhan Matkar"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Education and Details */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-12 bg-gray-200 p-10 border-rounded shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">About Me</h2>
          <p className="text-lg mb-6 leading-relaxed text-gray-800">
            Hello! I'm <span className="font-semibold">Harshawardhan Matkar</span>, 
            a dedicated and innovative developer with a solid foundation in software engineering. 
            I specialize in crafting modern, responsive web applications and have a strong passion for solving 
            complex problems through technology.
          </p>

          <h3 className="text-3xl font-bold mb-4 text-blue-600">Education</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <span className="font-medium">BTech in Engineering Science</span>, 
              <span className="text-gray-600"> IIT Hyderabad (Aug'23 - Aug'27)</span>
            </li>
            <li>
              <span className="font-medium">Class XII (MH Board)</span>, 
              <span className="text-gray-600"> Kolhapur (Aug'23)</span>
            </li>
          </ul>

          {/* Download CV Button */}
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
