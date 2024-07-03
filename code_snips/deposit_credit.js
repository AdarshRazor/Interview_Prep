const express = require('express');
const app = express();
const port = 3000

let balance = 0;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
      <h1>Bank Operations</h1>
      <p>Balance: Rs ${balance}</p>
      <form action="/deposit" method="post">
        <input type="number" name="depositAmount" placeholder="Enter deposit amount" required>
        <button type="submit">Deposit</button>
      </form>
      <form action="/debit" method="post">
        <input type="number" name="debitAmount" placeholder="Enter debit amount" required>
        <button type="submit">Debit</button>
      </form>
    `);
  });

app.post('/deposit', (req, res) => {
    const amount = parseInt(req.body.depositAmount);
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
    }
    res.redirect('/');
  });
  
  app.post('/debit', (req, res) => {
    const amount = parseInt(req.body.debitAmount);
    if (!isNaN(amount) && amount > 0 && balance >= amount) {
      balance -= amount;
    }
    res.redirect('/');
  });

app.listen(port, () => {
    console.log("listening on port " + port)
})

