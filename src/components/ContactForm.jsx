import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "2b508431-1991-4981-bd25-abc36e472694"); // Replace with your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Error", data);
        setStatus('error');
        setResult(data.message || "Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      setStatus('error');
      setResult("Something went wrong, please try again.");
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="w-full max-w-lg mx-auto p-6 bg-white text-black border-2 border-rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

        {status === 'success' && (
          <div className="mb-4 p-4 text-green-700 bg-green-100 border border-green-200 rounded">
            Your message has been sent successfully!
          </div>
        )}

        {status === 'error' && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 border border-red-200 rounded">
            {result}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 bg-white text-black"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 bg-white text-black"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 bg-white text-black"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 bg-white text-black"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full p-2 text-white rounded ${status === 'loading' ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactForm;
