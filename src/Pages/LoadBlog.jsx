import React from 'react'
import BlogSection from '../components/BlogSection'
import Card from '../components/Card'
import { useGlobalState } from '../storage'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoadBlog() {

  const [content] = useGlobalState('contentArray');

  return (
    <div>
        <Navbar />
        <BlogSection/>
        <hr></hr>
        {/* Calling cards */}
        <center>
        {/*  justify-center items-center */}
          <div className='flex flex-wrap mt-10'>
            {content.length !== 0 
                ?
                content.map((item, index) => (
                  <Card key={index} cardData={item.substring(0,30) + "...."}/> 
                ))
              
              :
              " "
            }
          </div>
        </center> 
            
        <Footer />  
    </div>
  )
}
