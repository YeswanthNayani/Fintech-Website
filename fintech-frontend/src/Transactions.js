import React, { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/transactions") // Fetch data from backend
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.transaction_id}>
            {tx.transaction_type} - ${tx.amount} - {tx.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
