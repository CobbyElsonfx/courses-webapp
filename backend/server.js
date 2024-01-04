const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Proxy of  API requests to  canvas endpoint
app.use('/api', createProxyMiddleware({ target: 'https://lms.zoni.edu', changeOrigin: true }));

// respond to request from al`l routes
app.options('*', cors());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
