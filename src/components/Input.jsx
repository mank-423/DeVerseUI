import React, { useState } from 'react'
import axios from 'axios';
import FormData from 'form-data';
import { setGlobalState } from '../storage';


export default function Input() {
    const [fileImg, setFileImg] = useState(null);
    //  const [ipfsHash, setIpfsHash] = useState([]);
    //const [fileContent, setFileContent] = useState('');
    const [fileHash, setFileHash] = useState('');

    

    const fetchFileContent = async (fileUrl) => {
        try {
            const response = await fetch(fileUrl);
            const content = await response.text();
            setGlobalState('storeFileContent',content);
            //setFileContent(content);
        } catch (error) {
            console.error('Error fetching file content:', error);
        }
    };

    
    const sendFileToIPFS = async (e) => {
        e.preventDefault();
        if (fileImg) {
            try {
                //Fetch the file from the form
                const formData = new FormData();
                formData.append("file", fileImg);

                //Post method to send the data
                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        //Create a .env file to put the API key and Secret
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });

                //Consoling out the image hash
                //Thinking of storing the data in hook
                const cid = resFile.data.IpfsHash;
                //const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                //console.log(ImgHash);
                setFileHash("https://gateway.pinata.cloud/ipfs/"+cid);
                setGlobalState('storeFileHash', fileHash);
                console.log(fileHash);
                
                //Storing the hash in the react hook
                // if (ipfsHash.length === 0){
                //     ipfsHash.push(ImgHash)
                // }else{
                //     setIpfsHash([...ipfsHash, ImgHash]);
                // }

                //Take a look at your Pinata Pinned section, you will see a new file added to you list.
                fetchFileContent("https://gateway.pinata.cloud/ipfs/"+cid);   
                alert("Done");


            } catch (error) {
                alert("Error");
                //setBtnActive(true);
                console.log("Error sending File to IPFS: ")
                console.log(error);

            }
        }
    }

    
    return (
        <div className='border-2 border-current border-black p-4 m-8 place-content-center'>
            <form onSubmit={sendFileToIPFS} className=''>
                <h1 className='text-center text-2xl font-bold'>PUBLISH IT!</h1>
                <div className=''>
                    <div className='flex p-8 justify-center items-center'> 
                        <input type="file" className='block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full
                            file:text-sm file:font-semibold
                            file:bg-violet-200 file:text-violet-700
                            hover:file:bg-violet-100'  
                            onChange={(e) => setFileImg(e.target.files[0])} 
                            required 
                        /> 
                    </div>
                    <div className='flex justify-center items-center'>
                        <button 
                            type='submit' 
                            className= {`w-full text-sm block py-2 px-4 border-0 mr-4 font-semibold bg-violet-200 hover:bg-violet-300 rounded-full text-violet-700`}>
                            Mint NFT
                        </button>
                    </div>

                </div>
            </form>
            
        </div>
    )
}
