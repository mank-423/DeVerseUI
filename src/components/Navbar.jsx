import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { setGlobalState } from "../storage";

export default function Navbar({ fixed }) {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [haveMetamask, sethaveMetamask] = useState(true);

  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');

  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);

      setAccountAddress(accounts[0]);
      setAccountBalance(bal);

      //GLobal setting of values of wallet address and hash
      setGlobalState('walletBalance', bal);
      setGlobalState('walletAddress', accounts[0]);
      
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-violet-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              DeVerse
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="md:flex space-x-4 mx-auto py-2">

              <li><a href="/" className="text-white mx-2 px-4 py-2 rounded-lg hover:bg-purple-400">Home</a></li>
              <li><a href="/blog" className="text-white mx-2 px-4 py-2 rounded-lg hover:bg-purple-400">Publish</a></li>
              <li><a href="/explore" className="text-white mx-2 px-4 py-2 rounded-lg hover:bg-purple-400">Explore</a></li>
              <li><a href="/Profile" className="text-white mx-2 px-4 py-2 rounded-lg hover:bg-purple-400">Profile</a></li>
              {/* <li>
                <a href="/" className="">
                  <span> Connect Wallet </span>
                </a>
              </li> */}
            </ul>
              
            {haveMetamask ? (
                <div>
                  {isConnected
                    ?
                    <button className="btn text-white mx-auto px-4 py-2 text-sm rounded-lg bg-orange-400">
                      Connected to {accountAddress.slice(0, 4) + '...'+accountAddress.slice(30,32)}
                    </button>
                    :
                    <button className="btn text-white mx-auto mb-0 px-4 py-2 text-sm rounded-lg bg-orange-400 place-content-end" onClick={connectWallet}>
                      Connect Wallet
                    </button>
                  }
                </div>
              ) : alert('Get metamask account!')}

          </div>
        </div>
      </nav>
    </>
  );
}