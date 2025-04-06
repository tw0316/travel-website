// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection configuration
const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT || 5432,
  ssl: {
    rejectUnauthorized: false, // Keep this if required for AWS RDS
  },
});

// Create enquiries table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS enquiries (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    contact_number VARCHAR(50),
    destination VARCHAR(100),
    travel_duration VARCHAR(50),
    number_of_people INTEGER,
    travel_month VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

pool.query(createTableQuery)
  .then(() => {
    console.log("Ensured that the 'enquiries' table exists");
  })
  .catch((error) => {
    console.error("Error creating table:", error);
  });

// Endpoint to handle enquiry form submissions
app.post('/api/enquiry', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    destination,
    travelDuration,
    numberOfPeople,
    travelMonth,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO enquiries 
        (first_name, last_name, email, contact_number, destination, travel_duration, number_of_people, travel_month) 
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`,
      [firstName, lastName, email, contactNumber, destination, travelDuration, numberOfPeople, travelMonth]
    );
    res.status(201).json({ enquiry: result.rows[0] });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});