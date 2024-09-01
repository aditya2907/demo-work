const express = require('express');
const sql = require('mssql');

const app = express();
const port = 5000;

// SQL Server configuration
const config = {
  user: 'your-username',
  password: 'your-password',
  server: 'your-server-address',
  database: 'your-database',
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: false // Change to true if you use a self-signed certificate
  }
};

// Connect to SQL Server
sql.connect(config, err => {
  if (err) console.log(err);
  else console.log('Connected to SQL Server');
});

app.get('/api/data', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM your_table');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
