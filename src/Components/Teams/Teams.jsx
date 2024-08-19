// import React from "react";
// import "./Teams.css";
// const Teams = () => {
//   const team = [
//     {
//       avatar:
//         "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//       name: "Martiana dialan",
//       title: "Product designer",
//     },
//     {
//       avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//       name: "Micheal colorand",
//       title: "Software engineer",
//     },
//     {
//       avatar: "https://randomuser.me/api/portraits/women/79.jpg",
//       name: "Brown Luis",
//       title: "Full stack engineer",
//     },
//     {
//       avatar: "https://randomuser.me/api/portraits/women/63.jpg",
//       name: "Lysa sandiago",
//       title: "Head of designers",
//     },
//     {
//       avatar: "https://randomuser.me/api/portraits/men/86.jpg",
//       name: "Daniel martin",
//       title: "Product designer",
//     },
//     {
//       avatar: "https://randomuser.me/api/portraits/men/46.jpg",
//       name: "Vicky tanson",
//       title: "Product manager",
//     },
//     {
//       avatar: "https://randomuser.me/api/portraits/men/29.jpg",
//       name: "Nilson kalin",
//       title: "DevOp engineer",
//     },
//     {
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//       name: "Tina watersone",
//       title: "Brand designer",
//     },
//   ];

//   return (
//     <section className="py-14">
//       <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
//         <div className="max-w-xl mx-auto">
//           <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//             Meet our team
//           </h3>
//           <p className="text-gray-600 mt-3">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy.
//           </p>
//         </div>
//         <div className="mt-12">
//           <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//             {team.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="transform transition-all duration-500 ease-out opacity-0 translate-x-[-100%] animate-slide-in"
//                 style={{ animationDelay: `${idx * 0.3}s` }} // Stagger the animation
//               >
//                 <div className="w-20 h-20 mx-auto">
//                   <img
//                     src={item.avatar}
//                     className="w-full h-full rounded-full"
//                     alt={item.name}
//                   />
//                 </div>
//                 <div className="mt-2">
//                   <h4 className="text-gray-700 font-semibold sm:text-lg">
//                     {item.name}
//                   </h4>
//                   <p className="text-indigo-600">{item.title}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Teams;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Teams = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Martiana Dialan",
      title: "Product Designer",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Micheal Colorand",
      title: "Software Engineer",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Brown Luis",
      title: "Full Stack Engineer",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      name: "Lysa Sandiago",
      title: "Head of Designers",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Daniel Martin",
      title: "Product Designer",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Vicky Tanson",
      title: "Product Manager",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
      name: "Nilson Kalin",
      title: "DevOp Engineer",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Tina Watersone",
      title: "Brand Designer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Time between scrolls
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our team
          </h3>
          <p className="text-gray-600 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className="mt-12">
          <Slider {...settings}>
            {team.map((item, idx) => (
              <div key={idx}>
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt={item.name}
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600 mb-6">{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Teams;
