import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row sm:-mt-4 gap-3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-line text-gray-400 text-3xl"></i>
          </a>
          <a href="mailto:maafrith15919@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-mail-line text-gray-400 text-3xl"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line text-gray-400 text-3xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-aafrith-100391215/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-line text-gray-400 text-3xl"></i>
          </a>
          <a href="https://github.com/Aafrith" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill text-gray-400 text-3xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-[150px] bg-[#3C5E5D] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
