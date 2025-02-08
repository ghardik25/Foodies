const express = require('express')
const cors = require('cors')
const router = require('./routes/routes');
const app = express();
const port = process.env.PORT || 10000;

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  optionsSuccessStatus: 200
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Router
app.use('/', router);

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
