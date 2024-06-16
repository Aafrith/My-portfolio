import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import axios from "axios";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const Contact = portfolioData?.contact;
  const [formData, setFormData] = useState({
    senderEmail: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/portfolio/send-email", formData);
      alert("Email sent successfully!");
      setFormData({
        senderEmail: "",
        message: ""
      });
    } catch (error) {
      alert("Error sending email.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="md:w-1/2">
        <SectionTitle title="Contact Information" />
        <div className="flex flex-col items-center sm:items-start">
          {/* Lottie Animation */}
          <div className="h-[500px] w-[800px] sm:w-auto mb-4 sm:mb-0 sm:-mt-[120px]">
            <dotlottie-player
              src="https://lottie.host/6eb71e44-dd19-444b-90b1-7ec7f93bf6fb/DIfXWwgUps.json"
              background="transparent"
              speed="1"
              direction="1"
              playMode="normal"
              autoplay
            ></dotlottie-player>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col text-tertiary gap-1 sm:-mt-[70px] sm:px-[120px]">
            <p className="text-tertiary text-sm">{"{"}</p>
            {Contact ? (
              Object.keys(Contact)
                .filter((key) => key !== "_id") // Filter out the _id key
                .map((key) => (
                  <p className="ml-5 text-sm" key={key}>
                    <span className="text-tertiary">{key} : </span>
                    <span className="text-tertiary">{Contact[key]}</span>
                  </p>
                ))
            ) : (
              <p></p>
            )}
            <p className="text-tertiary text-sm">{"}"}</p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 w-full px-4 items-center">
            <div className="w-full max-w-[580px]">
              <input
                type="email"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                placeholder="Your Email"
                className="border rounded px-4 py-2 text-black w-full"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="border rounded px-4 py-2 text-black h-40 w-full mt-4"
                required
              />
              <button type="submit" className="bg-tertiary text-primary rounded px-4 py-2 mt-4 mx-auto block w-24">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
