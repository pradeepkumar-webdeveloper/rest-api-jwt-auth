require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.get('/', (req, res) => res.json({ message: '🔐 REST API JWT Auth — Pradeep Kumar S' }));

app.listen(process.env.PORT || 5000, () => console.log(`Server on port ${process.env.PORT || 5000}`));
