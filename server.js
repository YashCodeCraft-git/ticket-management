const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config();  
connectDB();  

const app = express();
app.use(bodyParser.json());  

app.use('/api/tickets', ticketRoutes);  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
