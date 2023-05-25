import React from 'react'
import BlogSection from '../components/BlogSection'
import Card from '../components/Card'
import { useGlobalState } from '../storage'

export default function LoadBlog() {

  const [content] = useGlobalState('storeFileContent');

  return (
    <div>
        <BlogSection/>
        <hr></hr>
        {/* Calling cards */}
        <div className='flex flex-wrap mt-10'>
          {content.length !== 0 ? <Card cardData={content.substring(0,15)+"....."}/> :" "}
        </div> 
        
    </div>
  )
}
