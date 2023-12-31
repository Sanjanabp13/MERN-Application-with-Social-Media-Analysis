import { useEffect, useState } from "react";
import "../RightSide/RightSide.css"


function Web(){
    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
          try {
            /* MetaMask is installed */
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            // setWalletAddress(accounts[0]);
            console.log(accounts[0]);
          } catch (err) {
            console.error(err.message);
          }
        } else {
          /* MetaMask is not installed */
          console.log("Please install MetaMask");
        }
      };

      return(
        <div>
            <button onClick={connectWallet} className="button r-button">Connect Wallet</button>
        </div>
      )
    
      
}

export default Web;