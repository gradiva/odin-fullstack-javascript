const express = require('express');
const path = require('path');

const app = express();

const hostname = '127.0.0.1';
const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.resolve(__dirname, './contact-me.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname, './404.html');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
