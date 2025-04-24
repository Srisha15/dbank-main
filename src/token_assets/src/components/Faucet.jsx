import React, { useState } from "react";
import { token } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";
import '../../../token_assets/assets/token.css';



function Faucet() {

  const [isDisabled, setDisabled] = useState(false);
  const [buttonText, setText] = useState("Get it now!");

  async function handleClick(event) {
    setDisabled(true);
    const result = await token.payOut();
    setText(result);
  }

  //   const authenticatedCanister = createActor(canisterId, {
  //     agentOptions:{
  //       identity,
  //     },



  //   });

  //   const result = await token.payOut();
  //   setText(result);
  //   // setDisabled(false);
  // }

  return (
    <div className="blue window">
      <h2>
        {/* <span role="img" aria-label="tap emoji">
        </span> */}
        Faucet
      </h2>
      <label>New users can claim 10 free tokens</label>
      <p className="trade-buttons">
        <button id="btn-payout" 
        onClick={handleClick}
        disabled = {isDisabled}>
          {buttonText};
        </button>
      </p>
    </div>
  );
}

export default Faucet;
