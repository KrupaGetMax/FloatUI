// import React from "react";

// const State = () => {
//   const stats = [
//     {
//       data: "35K",
//       title: "Customers",
//     },
//     {
//       data: "40+",
//       title: "Countries",
//     },
//     {
//       data: "30M+",
//       title: "Total revenue",
//     },
//   ];

//   return (
//     <section className=" flex items-center justify-center">
//       <div className="w-full max-w-screen-md p-12 bg-gray-800 rounded-lg shadow-lg py-24">
//         <div className="max-w-2xl mx-auto text-center">
//           <h3 className="text-white text-3xl font-semibold sm:text-4xl">
//             Our customers are always happy
//           </h3>
//           <p className="mt-3 text-gray-300">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//             venenatis sollicitudin quam ut tincidunt.
//           </p>
//         </div>
//         <div className="mt-12">
//           <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
//             {stats.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="text-center bg-gray-700 px-6 py-6 rounded-lg"
//               >
//                 <h4 className="text-4xl text-white font-semibold">
//                   {item.data}
//                 </h4>
//                 <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default State;

import React from "react";
import CountUp from "react-countup";

const State = () => {
  const stats = [
    {
      data: 3500,
      title: "Customers",
      suffix: "K",
    },
    {
      data: 40,
      title: "Countries",
      suffix: "+",
    },
    {
      data: 30,
      title: "Total revenue",
      suffix: "M+",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-md p-12 bg-gray-800 rounded-lg shadow-lg py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Our customers are always happy
          </h3>
          <p className="mt-3 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="text-center bg-gray-700 px-6 py-6 rounded-lg"
              >
                <h4 className="text-4xl text-white font-semibold">
                  <CountUp end={item.data} duration={2} suffix={item.suffix} />
                </h4>
                <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default State;
