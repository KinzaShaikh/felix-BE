const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('MongoDB connected');
//         app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//     })
//     .catch(err => console.error(err));
