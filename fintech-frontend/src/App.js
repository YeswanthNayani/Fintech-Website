import React from "react";
import Users from "./Users";         // Import Users Component
import Accounts from "./Accounts";   // Import Accounts Component
import Transactions from "./Transactions"; // Import Transactions Component

function App() {
  return (
    <div>
      <h1>Fintech Dashboard</h1>
      <Users />
      <Accounts />
      <Transactions />
    </div>
  );
}

export default App;
