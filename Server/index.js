const express = require('express')
const cors = require('cors')
const router = require('./routes/routes');
const app = express();
const port = 3000;

app.use(cors())
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

// Incoming datatype
app.use(express.json());

// Router
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app: Listening on port ${port}`)
})