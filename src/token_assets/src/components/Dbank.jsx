import React, { useState, useEffect } from "react";
import { token } from "../../../declarations/token";
import '../../../token_assets/assets/dbank.css'

const DBank = () => {
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateBalance();
  }, []);

  const updateBalance = async () => {
    const currentAmount = await token.checkBalance();
    setBalance(Math.round(currentAmount * 100) / 100);
  };

  const handleTransaction = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (topUpAmount) {
      await token.topUp(parseFloat(topUpAmount));
    }

    if (withdrawAmount) {
      await token.withdraw(parseFloat(withdrawAmount));
    }

    await token.compound();
    updateBalance();
    setTopUpAmount("");
    setWithdrawAmount("");
    setLoading(false);
  };

  return (
    <div className="container">
      <img src="dbank_logo.png" alt="DBank logo" width="100" />
      <h1>Current Balance: ${balance}</h1>
      <div className="divider"></div>
      <form onSubmit={handleTransaction}>
        <h2>Amount to Top Up</h2>
        <input
          type="number"
          step="0.01"
          min="0"
          value={topUpAmount}
          onChange={(e) => setTopUpAmount(e.target.value)}
        />
        <h2>Amount to Withdraw</h2>
        <input
          type="number"
          step="0.01"
          min="0"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Finalise Transaction"}
        </button>
      </form>
    </div>
  );
};

export default DBank;
