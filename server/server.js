const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require("body-parser");
const cors = require('cors');
const users = require('./routes/users');
const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/users', users);



const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));