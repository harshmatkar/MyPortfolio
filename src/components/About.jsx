import React from "react";
import myImage from "../assets/my-image.jpg";


const About = () => {
  return (
    <section className="bg-gray-100 text-gray-900 mt-20 py-12" id="about">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={myImage} // Replace with your image path
            alt="Your Name"
            className="w-48 h-48 rounded-full shadow-md object-cover"
          />
        </div>

        {/* Education and Details */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            Hi, I'm Harshawardhan Matkar, a passionate developer with a
            background in software engineering. I specialize in building modern,
            responsive web applications.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>BTech IN Engineering Science , IIT Hyderabad : (Aug'23-Aug'27)</li>
            <li>XII (MH BOARD) , Kolhapur : Aug'23</li>
          </ul>

          {/* Download CV Button */}
          <a
            href="/path-to-your-cv.pdf" // Replace with the path to your CV
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
