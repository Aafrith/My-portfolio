import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Mohamed Aafrith",
    age: null,
    email: "maafrith15919@gmail.com",
    mobile: "+94773054223",
    country: "Srilanka",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="md:w-1/2">
        <SectionTitle title="Say Hello !" />

        <div className="flex flex-col items-center sm:items-start">
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
          <div className="flex flex-col text-tertiary gap-1 sm:-mt-[70px] sm:px-[120px]">
            <p className="text-tertiary text-sm">{"{"}</p>
            {Object.keys(user).map((key) => (
              <p className="ml-5 text-[20px]" key={key}>
                <span className="text-tertiary">{key} : </span>
                <span className="text-tertiary">{user[key]}</span>
              </p>
            ))}
            <p className="text-tertiary text-sm">{"}"}</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 mt-10 md:mt-0">
        <SectionTitle title="Contact Me" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border border-tertiary gap-4 p-4 bg-[#58432259] rounded-lg shadow-lg max-w-[500px] mx-auto"
        >
          <label className="flex flex-col">
            <span className="text-white mb-2">Full name *</span>
            <input
              type="text"
              placeholder="Enter your full name ..."
              className="p-2 border border-primary rounded-md bg-[#0f314769] text-white outline-none"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-2">Email *</span>
            <input
              type="email"
              placeholder="Enter your email ..."
              className="p-2 rounded-md border border-primary bg-[#0f314769] text-white outline-none"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-2">Message *</span>
            <textarea
              placeholder="Enter your message ..."
              className="p-2 rounded-md border border-primary bg-[#0f314769] text-white outline-none h-32"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="py-2 px-4 bg-[#f3a43cf3] text-primary text-2xl text-bold rounded-md max-w-[100px] hover:bg-tertiary-dark transition self-center"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
