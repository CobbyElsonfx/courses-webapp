// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Proxy API requests to Canvas LMS
app.use('/api', createProxyMiddleware({ target: 'https://lms.zoni.edu', changeOrigin: true }));

// Handle OPTIONS requests explicitly for CORS preflight
app.options('*', cors());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
