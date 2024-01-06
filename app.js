const express = require('express');
const {v1,txt} = require("../Distance_calc-main/index")
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'sasi';

// Connect to MongoDB
MongoClient.connect(url, (err, client) => {
    if (err) throw err;
  
    console.log('Connected to MongoDB');
  
    const db = client.db(dbName);

  // API endpoint to insert data into MongoDB
  app.post('/insertData', (req, res) => {
    const dataToInsert = {
      outputValue: txt.innerText // Assuming txt is an array with at least one element
    };

    // Insert data into MongoDB
    db.collection('IT').insertOne(dataToInsert, (err, result) => {
      if (err) throw err;
      console.log('Data inserted into MongoDB');
      res.json({ status: 'success' });
    });
  });

  // Close the MongoDB connection when the server is closed
  process.on('SIGINT', () => {
    client.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
