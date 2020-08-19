const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/games', require('./routes/games'));

app.listen(PORT, () => {
    console.log(`Server in port ${PORT}`)
});