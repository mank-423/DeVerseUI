import React from 'react'
import img from '../download.jpg';

export default function Card(props) {


    //const imgSrc = "https://source.unsplash.com/random/200×200/?internet";
    const cardData = props.cardData;

    return (
        <div>
            <div>
                <a href="/" className="m-4 max-w-sm p-3 inline-block bg-violet-200 border border-violet-400 rounded-lg shadow dark:border-white-700 dark:hover:bg-white-700">
                    <center><img src={img} alt="web" className='' /></center>
                    {/* <h5 className="flex justify-center items-center  tracking-tight text-white-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
                    <p className="flex justify-center items-center text-lg font-bold text-white-700 dark:text-white-400">
                        {cardData}
                    </p>
                </a>
            </div>

        </div>
    )
}
