import React, { useEffect, useState } from "react";
import axios from "axios";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/accounts") // Fetch account data
      .then((response) => setAccounts(response.data))
      .catch((error) => console.error("Error fetching accounts:", error));
  }, []);

  return (
    <div>
      <h2>Account Balances</h2>
      <ul>
        {accounts.map((acc) => (
          <li key={acc.account_id}>
            User ID: {acc.user_id} - Balance: ${acc.balance} ({acc.currency})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
