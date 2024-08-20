const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use('/api', userRoutes);
app.use('/v1/category', categoryRoutes);