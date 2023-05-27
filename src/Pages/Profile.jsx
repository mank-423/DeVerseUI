import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useGlobalState } from '../storage'
import Identicon from "react-hooks-identicons";
import Card from '../components/Card';

export default function Profile() {

  const [balanceWallet] = useGlobalState('walletBalance');
  const [balanceAddress] = useGlobalState('walletAddress');
  const [content] = useGlobalState('contentArray');

  const result = Math.random().toString(36).substring(2,7);

  return (
    <div>
      <div><Navbar /></div>

      <div className='profile-section'>

        <div className='profile lg:grid lg:grid-cols-2 md:grid md:grid-cols-2'>

          <div className='left justify-center items-center border-r-2'>
            <div className='m-auto w-auto lg:m-28 text-center'>
              Here you will find your published IP's and collectables that u bought from other users. 
              Scroll past to see the data
            </div>
          </div>
          
          <div className='right'>
            <div className=' flex justify-center items-center m-16 w-auto lg:m-16'>
              <Identicon className='rounded-lg' size='100' string= {result} />
              <div className="flex flex-col p-4 w-auto m-auto">
                <p>{balanceAddress ? "The address of the profile" + balanceAddress.substring(0,5) + '...' + balanceAddress.substring(28,32) : 'Connect metamask to know about the details of account'}</p>
                <br />
                <p>{balanceWallet ? "The balance of the profile" + balanceWallet : ''}</p>
              </div>
            </div>
          </div>
        
        </div>  

        <hr></hr>

        <div className='publish'>

          <h1 className='m-4 lg:m-8 md:m-4 font-bold text-xl'>Artworks Published</h1>

          <center>
          {/*  justify-center items-center */}
            <div className='flex flex-wrap mt-10 p-8'>
              {content.length !== 0 
                  ?
                  content.map((item, index) => (
                    <Card key={index} cardData={item.substring(0,30) + "...."}/> 
                  ))
                
                :
                (
                  <h1 className='m-auto'>  No content published still yet</h1>
                )
              }
            </div>
          </center> 
        </div>
        
        <hr></hr>
        <div className='buy p-4'>
          <h1 className='m-4 lg:m-8 md:m-4 font-bold text-xl'>Artworks Bought</h1>
        </div>

      </div>


      {/* <div><Footer /></div> */}
      
    </div>
  )
}
