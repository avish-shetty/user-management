const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('Database connection error:', error));
// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Start Server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
