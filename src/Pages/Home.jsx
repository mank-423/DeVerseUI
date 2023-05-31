// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Logo from '../logo.png'

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
// <div className="bg-white">
//   <div className='grid grid-cols-2'>
//     <div className=''>
//       <img src={Logo} alt="Logo" className='opacity-40' />
//     </div>
//     <div>
//     <header className="text-center py-20 justify-center items-center">
//       <h1 className="text-4xl font-bold text-gray-800">Welcome to De-Verse</h1>
//       <p className="text-gray-600 mt-4">Discover amazing products and services.</p>
//     </header>
//     </div>
//   </div>

//         <section className="bg-purple-200 py-20">
//             <div className="container mx-auto px-4">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
//               <p className="text-gray-600">
//                 Publish your content
//               </p>
//             </div>
//         </section>


//         <section className="bg-white py-20">
//           <div className="container mx-auto px-4">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
//             <ul className="text-gray-600">
//               <li className="mb-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 inline-block mr-2 text-gray-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 Easy to publish
//               </li>
//               <li className="mb-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 inline-block mr-2 text-gray-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 Full Ownership
//               </li>
//               <li className="mb-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 inline-block mr-2 text-gray-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 Responsive design
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>



//       <Footer />
//     </div>
//   )
// }

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../logo.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white">

        <div className='lg:grid lg:grid-cols-2'>
          <div>
            <img src={Logo} alt="Logo" className='opacity-40 object-scale-down' />
          </div>
          <div>
            <header className="text-center py-20">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">Welcome to De-Verse</h1>
              <p className="text-gray-600 mt-4">A self publication powered by Web3.0.</p>
            </header>
          </div>
        </div>
        <section className="bg-purple-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus rutrum
              justo, nec gravida turpis interdum at.
            </p>
          </div>
        </section>


        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">Features</h2>
            <ul className="text-gray-600">
              <li className="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Easy to use
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fast and reliable
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Responsive design
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
