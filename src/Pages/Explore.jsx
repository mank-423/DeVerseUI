import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { useGlobalState } from '../storage';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

export default function Explore() {
  const [content] = useGlobalState('contentArray');
  return (
    <div>
      <Navbar />
      <Carousel/>
      
      {/* Search bar for the explore page */}
      <div className='flex justify-center m-2 p-2 items-center'>
        <SearchBar />
      </div>


      <div className='flex justify-center items-center'>
        Welcome to the exploration part of the project
      </div>

      <div>
        <div className='flex flex-wrap mt-10'>

          {content.length !== 0
            ?
            content.map((item, index) => (
              <Card key={index} cardData={item.substring(0, 30) + "...."} />
            ))

            :
            (
              <h1 className='m-auto'>  No content published still yet</h1>
            )
          }
        </div>
        <Footer />
      </div>
    </div>
      )
}
