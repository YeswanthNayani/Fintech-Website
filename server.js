const express = require("express");
const cors = require("cors");
const db = require("./db"); // Import database connection

const app = express();
app.use(express.json());
app.use(cors());
// 📌 Get All Users (List of Bank Customers)
app.get("/users", async (req, res) => {
    try {
      const users = await db.query("SELECT * FROM users");
      res.json(users.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // 📌 Get All Accounts (Bank Account Details)
  app.get("/accounts", async (req, res) => {
    try {
      const accounts = await db.query("SELECT * FROM accounts");
      res.json(accounts.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // 📌 Get All Transactions (Money Movements)
  app.get("/transactions", async (req, res) => {
    try {
      const transactions = await db.query("SELECT * FROM transactions ORDER BY created_at DESC");
      res.json(transactions.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

// Test database connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()"); // Fetch current time from DB
    res.json({ message: "Database connected!", time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
