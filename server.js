const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route filse
const auth = require('./routes/auth');
const users = require('./routes/users');
const children = require('./routes/children');

const app = express();

// Body parser
app.use(express.json({ extended: false }));

// Dev logger middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/auth/users', users);
app.use('/api/v1/children', children);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server run in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle Uhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close serrver & exit process
  server.close(() => process.exit(1));
});
