
import React from "react";


export default function Certifications() {
  return (

      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-8 text-white">
            Certifications
          </h1> 
          <div class="grid grid-cols-1  place-items-center">
                <img
                  className="w-96 h-full mb-4"
                  alt="gallery"
                  src='./Screen Shot 2022-02-12 at 8.01.58 AM.png'

                />
                <img
                  className="w-96 h-full"
                  alt="gallery"
                  src='./Screen Shot 2022-02-12 at 8.21.23 AM.png'
                />    
             </div>
        </div>
      </div>
  );
}







// export default function Certifications() {
//   return (
//     <section id="testimonials">
//       <div className="container px-5 py-10 mx-auto text-center">
//         <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
//           Certifications
//         </h1>
//                 <div className="sm:w-1/2 w-100 p-4  inline-flex items-center">
//                   <img
//                     alt="testimonial"
//                     src='./Screen Shot 2022-02-12 at 8.01.58 AM.png'
//                     className="w-96 h-full"
//                   />
//                   <img
//                     alt="testimonial"
//                     src='./Screen Shot 2022-02-12 at 8.21.23 AM.png'
//                     className="w-96 h-full"
//                   />
//                </div>
//               </div>
//     </section>
//   );
// }