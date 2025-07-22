require('dotenv').config(); // Loads .env variables
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());



const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', express.json(), courseRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send(`Server running on port ${process.env.PORT}`);
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
  console.log('DB User:', process.env.DB_USER); // Test .env access
});
