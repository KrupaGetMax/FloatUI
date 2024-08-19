// import React from "react";

// const Card = () => {
//   return (
//     <>
//       <section class="bg-white dark:bg-gray-900">
//         <div class="container px-6 py-12 mx-auto">
//           <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
//             Best website collections
//           </h1>

//           <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
//             <div class="lg:mx-12">
//               <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
//                 Table of Content
//               </h1>

//               <div class="mt-4 space-y-4 lg:mt-8">
//                 <button class="block text-blue-500 dark:text-blue-400 hover:underline">
//                   Web design
//                 </button>
//                 <button class="block text-gray-500 dark:text-gray-300 hover:underline">
//                   App design
//                 </button>
//                 <button class="block text-gray-500 dark:text-gray-300 hover:underline">
//                   Branding
//                 </button>
//                 <button
//                   href="#"
//                   class="block text-gray-500 dark:text-gray-300 hover:underline"
//                 >
//                   Animation
//                 </button>
//               </div>
//             </div>

//             <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">
//               <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
//                 <div>
//                   <img
//                     class="object-cover w-full rounded-lg h-96 "
//                     src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
//                     alt=""
//                   />
//                   <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
//                     Best website collections
//                   </h2>
//                   <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
//                     Website
//                   </p>
//                 </div>

//                 <div>
//                   <img
//                     class="object-cover w-full rounded-lg h-96 "
//                     src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
//                     alt=""
//                   />
//                   <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
//                     Block of Ui kit collections
//                   </h2>
//                   <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
//                     Ui kit
//                   </p>
//                 </div>

//                 <div>
//                   <img
//                     class="object-cover w-full rounded-lg h-96 "
//                     src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//                     alt=""
//                   />
//                   <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
//                     Ton’s of mobile mockup
//                   </h2>
//                   <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
//                     Mockups
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Card;

import React, { useState } from "react";

const Card = () => {
  const [content, setContent] = useState("webDesign");
  const [activeContent, setActiveContent] = useState("webDesign");

  const handleContentChange = (newContent) => {
    setContent(newContent);
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (content) {
      case "webDesign":
        return (
          <div class="flex flex-col lg:flex-row items-center gap-8 px-8 py-12 ">
            <div class="lg:w-1/2 text-center lg:text-left">
              <h2 class="text-2xl font-bold text-gray-800 capitalize dark:text-white hover:text-blue-500 transition duration-300">
                Best Website Collections
              </h2>
              <p class="mt-4 text-lg tracking-wide text-blue-500 uppercase dark:text-blue-400">
                Website
              </p>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                Explore our curated selection of top website designs, handpicked
                to inspire your next project.
              </p>
            </div>
            <img
              class="object-cover w-full lg:w-1/2 rounded-lg h-64 transform hover:scale-105 transition duration-300 shadow-lg"
              src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
              alt="Best website collections"
            />
          </div>
        );
      case "appDesign":
        return (
          <div class="flex flex-col lg:flex-row items-center gap-8 px-8 py-12 bg-gray-100 rounded-lg shadow-lg">
            <div class="lg:w-1/2 text-center lg:text-left">
              <h2 class="text-2xl font-bold text-gray-800 capitalize dark:text-white hover:text-blue-500 transition duration-300">
                Block of UI Kit Collections
              </h2>
              <p class="mt-4 text-lg tracking-wide text-blue-500 uppercase dark:text-blue-400">
                UI Kit
              </p>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                Discover a variety of UI kits, perfect for building modern and
                intuitive interfaces.
              </p>
            </div>
            <img
              class="object-cover w-full lg:w-1/2 rounded-lg h-64 transform hover:scale-105 transition duration-300 shadow-lg"
              src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="Block of UI kit collections"
            />
          </div>
        );
      case "branding":
        return (
          <div class="flex flex-col lg:flex-row items-center gap-8 px-8 py-12 bg-gray-100 rounded-lg shadow-lg">
            <div class="lg:w-1/2 text-center lg:text-left">
              <h2 class="text-2xl font-bold text-gray-800 capitalize dark:text-white hover:text-blue-500 transition duration-300">
                Tons of Mobile Mockups
              </h2>
              <p class="mt-4 text-lg tracking-wide text-blue-500 uppercase dark:text-blue-400">
                Mockups
              </p>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                Access an extensive library of mobile mockups to showcase your
                app designs with flair.
              </p>
            </div>
            <img
              class="object-cover w-full lg:w-1/2 rounded-lg h-64 transform hover:scale-105 transition duration-300 shadow-lg"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Tons of mobile mockup"
            />
          </div>
        );
      case "animation":
        return (
          <div class="flex flex-col lg:flex-row items-center gap-8 px-8 py-12 bg-gray-100 rounded-lg shadow-lg">
            <div class="lg:w-1/2 text-center lg:text-left">
              <h2 class="text-2xl font-bold text-gray-800 capitalize dark:text-white hover:text-blue-500 transition duration-300">
                Animation Design
              </h2>
              <p class="mt-4 text-lg tracking-wide text-blue-500 uppercase dark:text-blue-400">
                Animation
              </p>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                Explore cutting-edge animation designs to bring your ideas to
                life in dynamic ways.
              </p>
            </div>
            <img
              class="object-cover w-full lg:w-1/2 rounded-lg h-64 transform hover:scale-105 transition duration-300 shadow-lg"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Animation design"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Best Website Collections
          </h1>

          <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div class="lg:mx-12">
              <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
                Table of Content
              </h1>

              <div class="mt-4 space-y-4 lg:mt-8">
                <button
                  className={`block hover:underline ${
                    activeContent === "webDesign"
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-300"
                  }`}
                  onClick={() => handleContentChange("webDesign")}
                >
                  Web Design
                </button>
                <button
                  className={`block hover:underline ${
                    activeContent === "appDesign"
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-300"
                  }`}
                  onClick={() => handleContentChange("appDesign")}
                >
                  App Design
                </button>
                <button
                  className={`block hover:underline ${
                    activeContent === "branding"
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-300"
                  }`}
                  onClick={() => handleContentChange("branding")}
                >
                  Branding
                </button>
                <button
                  className={`block hover:underline ${
                    activeContent === "animation"
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-300"
                  }`}
                  onClick={() => handleContentChange("animation")}
                >
                  Animation
                </button>
              </div>
            </div>

            <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">{renderContent()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
