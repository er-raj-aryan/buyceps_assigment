import React from "react";

function Navbar() {
    const handleGithubButtonClick = () => {
        const tUrl ="https://github.com/er-raj-aryan/buyceps_assigment";
        window.open(tUrl, '_blank');
    }

  return (
    <div>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between drop-shadow-2xl">
          {/* <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="hover:text-gray-900">Fourth Link</a>
          </nav> */}
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span class="ml-3 text-xl">Buyceps Assigment</span>
          </a>
          <div class=" lg:w-1/5 inline-flex lg:justify-center ml-5 lg:ml-0">
            <button class="inline-flex items-center gap-2 bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleGithubButtonClick}>
              <img src="./icons8-github-94.png" alt="" className="w-5 h-5"/>
              Github
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
