// import React from "react";

// const Portfolio = () => {
//   return (
//     <>
//       <section id="portfolio" class="portfolio-section py-16 px-4">
//         <div class="container mx-auto">
//           <div class="text-center mb-12">
//             <h2 class="text-4xl font-bold mb-4">Portfolio Showcase</h2>
//             <p class="text-lg text-indigo-500 font-semibold">
//               Discover our latest projects and success stories
//             </p>
//           </div>
//           <div class="flex flex-col md:flex-row items-center mb-8">
//             <button class="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//               All
//             </button>
//             <button class="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//               Web Design
//             </button>
//             <button class="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//               App Development
//             </button>
//             <button class="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//               Branding
//             </button>
//           </div>

//           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-1">
//                 <img
//                   class="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-1.png"
//                   alt="Project 1"
//                 />
//                 <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div class="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Awesome Project 1
//                   </h3>
//                   <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
//                     App development
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-2">
//                 <img
//                   class="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-2.png"
//                   alt="Project 1"
//                 />
//                 <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div class="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Awesome Project 2
//                   </h3>
//                   <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
//                     Branding
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-3">
//                 <img
//                   class="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-3.png"
//                   alt="Project 1"
//                 />
//                 <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div class="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Awesome Project 3
//                   </h3>
//                   <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
//                     Web Design, Branding
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-4">
//                 <img
//                   class="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-4.png"
//                   alt="Project 1"
//                 />
//                 <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div class="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Awesome Project 4
//                   </h3>
//                   <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
//                     Web Design, Branding
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-5">
//                 <img
//                   class="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-5.png"
//                   alt="Project 1"
//                 />
//                 <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div class="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Awesome Project 5
//                   </h3>
//                   <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
//                     Web Design, Branding
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-6">
//                 <img
//                   class="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-6.png"
//                   alt="Project 1"
//                 />
//                 <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div class="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Awesome Project 6
//                   </h3>
//                   <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
//                     Web Design, Branding
//                   </span>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const portfolioItems = [
    {
      title: "Awesome Project 1",
      category: "App Development",
      imgSrc:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Building-a-career-in-Mobile-App-Development.jpg",
    },
    {
      title: "Awesome Project 2",
      category: "Branding",
      imgSrc:
        "https://canto-wp-media.s3.amazonaws.com/app/uploads/2019/11/19190943/methods-of-branding-31.jpg",
    },
    {
      title: "Awesome Project 3",
      category: "Web Design, Branding",
      imgSrc:
        "https://business.adobe.com/blog/basics/media_1132acbaaf72680b84753f2d51880603efeae51b7.png?width=750&format=png&optimize=medium",
    },
    {
      title: "Awesome Project 4",
      category: "Web Design, Branding",
      imgSrc:
        "https://business.adobe.com/blog/how-to/media_16841025dcc177524745ed46d1bde00dc618a2cd3.png?width=750&format=png&optimize=medium",
    },
    {
      title: "Awesome Project 5",
      category: "Web Design, Branding",
      imgSrc:
        "https://business.adobe.com/blog/basics/media_1f8581118e3ecac00076b129664cc7ece3dd20009.png?width=750&format=png&optimize=medium",
    },
    {
      title: "Awesome Project 6",
      category: "Web Design, Branding",
      imgSrc:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2024/02/image1-6.png",
    },
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(filter));

  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
            <p className="text-lg text-indigo-500 font-semibold">
              Discover our latest projects and success stories
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <button
              onClick={() => setFilter("All")}
              className={`filter-button ${
                filter === "All" ? "bg-pink-500" : "bg-indigo-500"
              } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Web Design")}
              className={`filter-button ${
                filter === "Web Design" ? "bg-pink-500" : "bg-indigo-500"
              } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
            >
              Web Design
            </button>
            <button
              onClick={() => setFilter("App Development")}
              className={`filter-button ${
                filter === "App Development" ? "bg-pink-500" : "bg-indigo-500"
              } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
            >
              App Development
            </button>
            <button
              onClick={() => setFilter("Branding")}
              className={`filter-button ${
                filter === "Branding" ? "bg-pink-500" : "bg-indigo-500"
              } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
            >
              Branding
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"
              >
                <a href={`/project-${index + 1}`}>
                  <img
                    className="w-full h-60 object-cover"
                    src={item.imgSrc}
                    alt={`Project ${index + 1}`}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      {item.title}
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      {item.category}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
