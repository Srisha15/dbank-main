// import React from "react";
// import { Principal } from '@dfinity/principal';
// import { token } from "../../../declarations/token";
// import React, {useState} from "react";


// function Balance() {

//   const [inputValue, setInput] = useState("");
//   const [balanceResult, setBalance] = userState("");

  
//   async function handleClick() {
//     // console.log("Balance Button Clicked");
//     const principal = Principal.fromText(inputValue);
//     const balance = await token.balanceOf(principal);
//     setBalance(balance.toLocaleString());


//   }


//   return (
//     <div className="window white">
//       <label>Check account token balance:</label>
//       <p>
//         <input
//           id="balance-principal-id"
//           type="text"
//           placeholder="Enter a Principal ID"
//           value={inputValue}
//           onChange={(e) => setInput(e.target.value)}

//         />
//       </p>
//       <p className="trade-buttons">
//         <button
//           id="btn-request-balance"
//           onClick={handleClick}
//         >
//           Check Balance
//         </button>
//       </p>
//       <p>This account has a balance of {balanceResult}</p>
//     </div>
//   );
// }

// export default Balance;

import React, { useState } from "react";
import { Principal } from '@dfinity/principal';
import { token } from "../../../declarations/token";
import '../../../token_assets/assets/token.css';

function Balance() {
  const [inputValue, setInput] = useState("");
  const [balanceResult, setBalance] = useState(""); // Fixed from userState to useState
  const [cryptoSymbol, setSymbol] = useState("");
  const [isHidden, setHidden] = useState(true);


  async function handleClick() {
      const principal = Principal.fromText(inputValue); // Fixed 'Principle' to 'Principal'
      const balance = await token.balanceOf(principal); // Fixed 'principle' to 'principal'
      setBalance(balance.toLocaleString());
      setSymbol(await token.getSymbol());
      setHidden(false);
    } 
    
    // catch (error) {
    //   console.error("Error fetching balance:", error);
    //   setBalance("Invalid Principal ID or error fetching balance.");
    // }





  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter Principal ID"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button id="btn-request-balance" onClick={handleClick}>
          Check Balance
        </button>
      </p>
      <p hidden = {isHidden}>
        This account has a balance of <strong>{balanceResult} {cryptoSymbol}</strong>
      </p>
    </div>
  );
}


export default Balance;

