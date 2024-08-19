// import React from "react";

// const Content = () => {
//   return (
//     <>
//       <section class="bg-white dark:bg-gray-900">
//         <div class="container px-6 py-10 mx-auto">
//           <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
//             Latest Work
//           </h1>

//           <div class="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
//             <button class="h-12 px-8 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
//               Animation
//             </button>

//             <button class="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
//               Web design
//             </button>

//             <button class="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
//               App design
//             </button>

//             <button class="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
//               Branding
//             </button>
//           </div>

//           <section class="mt-8 space-y-8 lg:mt-12">
//             <section class="lg:flex lg:items-center">
//               <div class="lg:w-1/2 ">
//                 <p class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
//                   Ui kit
//                 </p>
//                 <h2 class="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
//                   Block of Ui kit collections
//                 </h2>
//               </div>

//               <div class="mt-4 lg:w-1/2 lg:mt-0">
//                 <img
//                   class="object-cover w-full h-64 rounded-lg md:h-96"
//                   src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
//                   alt=""
//                 />
//               </div>
//             </section>

//             <section class="lg:flex lg:items-center">
//               <div class="lg:w-1/2 ">
//                 <p class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
//                   Wareframe
//                 </p>
//                 <h2 class="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
//                   Best free website layout{" "}
//                 </h2>
//               </div>

//               <div class="mt-4 lg:w-1/2 lg:mt-0">
//                 <img
//                   class="object-cover w-full h-64 rounded-lg md:h-96"
//                   src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
//                   alt=""
//                 />
//               </div>
//             </section>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Content;

import React, { useState } from "react";

const Content = () => {
  const [activeTab, setActiveTab] = useState("Animation");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto md:px-10">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Latest Work
          </h1>

          <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
            <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                activeTab === "Animation"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-gray-200 dark:text-white dark:border-gray-700"
              } sm:text-base bg-transparent whitespace-nowrap focus:outline-none`}
              onClick={() => handleTabClick("Animation")}
            >
              Animation
            </button>

            <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                activeTab === "Web design"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-gray-200 dark:text-white dark:border-gray-700"
              } sm:text-base bg-transparent whitespace-nowrap focus:outline-none`}
              onClick={() => handleTabClick("Web design")}
            >
              Web design
            </button>

            <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                activeTab === "App design"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-gray-200 dark:text-white dark:border-gray-700"
              } sm:text-base bg-transparent whitespace-nowrap focus:outline-none`}
              onClick={() => handleTabClick("App design")}
            >
              App design
            </button>

            <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                activeTab === "Branding"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-gray-200 dark:text-white dark:border-gray-700"
              } sm:text-base bg-transparent whitespace-nowrap focus:outline-none`}
              onClick={() => handleTabClick("Branding")}
            >
              Branding
            </button>
          </div>

          <section className="mt-8 space-y-8 lg:mt-12">
            {activeTab === "Animation" && (
              // <section className="lg:flex lg:items-center lg:space-x-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              //   <div className="lg:w-1/2">
              //     <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
              //       Ui Kit
              //     </p>
              //     <h2 className="mt-2 text-3xl font-semibold text-gray-800 capitalize dark:text-white leading-tight">
              //       Block of UI Kit Collections
              //     </h2>
              //     <p className="mt-4 text-gray-600 dark:text-gray-300">
              //       Explore our carefully curated UI kit collections that will
              //       help you kickstart your design projects with ease.
              //     </p>
              //     <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
              //       Learn More
              //     </button>
              //   </div>
              //   <div className="mt-6 lg:mt-0 lg:w-1/2">
              //     <img
              //       className="object-cover w-full h-72 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              //       src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              //       alt="Ui Kit"
              //     />
              //   </div>
              // </section>
              <section className="lg:flex lg:items-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <div className="lg:w-1/2">
                  <p className="text-lg tracking-wider text-blue-600 uppercase dark:text-blue-400">
                    Ui Kit
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-gray-800 capitalize dark:text-white leading-snug">
                    Block of UI Kit Collections
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Discover a versatile and comprehensive set of UI components
                    designed to streamline your workflow and enhance your
                    creative projects.
                  </p>
                  <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500">
                    Explore More
                  </button>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2 flex justify-center">
                  <img
                    className="object-cover w-full max-w-md h-72 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="UI Kit"
                  />
                </div>
              </section>
            )}

            {activeTab === "Web design" && (
              <section className="lg:flex lg:items-center lg:space-x-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="lg:w-1/2">
                  <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                    Ui Kit
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-gray-800 capitalize dark:text-white leading-tight">
                    Block of UI Kit Collections
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Explore our carefully curated UI kit collections that will
                    help you kickstart your design projects with ease.
                  </p>
                  <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
                    Learn More
                  </button>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2">
                  <img
                    className="object-cover w-full h-72 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg"
                    alt="Ui Kit"
                  />
                </div>
              </section>
            )}

            {activeTab === "App design" && (
              <section className="lg:flex lg:items-center lg:space-x-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="lg:w-1/2">
                  <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                    Ui Kit
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-gray-800 capitalize dark:text-white leading-tight">
                    Block of UI Kit Collections
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Explore our carefully curated UI kit collections that will
                    help you kickstart your design projects with ease.
                  </p>
                  <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
                    Learn More
                  </button>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2">
                  <img
                    className="object-cover w-full h-72 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    src="https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg"
                    alt="Ui Kit"
                  />
                </div>
              </section>
            )}

            {activeTab === "Branding" && (
              <section className="lg:flex lg:items-center lg:space-x-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="lg:w-1/2">
                  <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                    Ui Kit
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-gray-800 capitalize dark:text-white leading-tight">
                    Block of UI Kit Collections
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Explore our carefully curated UI kit collections that will
                    help you kickstart your design projects with ease.
                  </p>
                  <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
                    Learn More
                  </button>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2">
                  <img
                    className="object-cover w-full h-72 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    src="https://www.shutterstock.com/image-photo/professional-development-programmer-working-programming-260nw-1233726961.jpg"
                    alt="Ui Kit"
                  />
                </div>
              </section>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default Content;
