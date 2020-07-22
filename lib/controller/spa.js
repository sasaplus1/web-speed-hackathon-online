const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');

const spaController = express.Router();

const sharp = require('sharp');
const axios = require('axios').default;

spaController.get('/images', (req, res) => {
  const url = decodeURIComponent(req.query.url);

  axios
    .get(url, {
      httpAgent: new http.Agent({ keepAlive: true }),
      responseType: 'stream',
    })
    .then((response) => {
      const webp = sharp().webp();

      // res.setHeader('Content-Type: image/webp');
      res.setHeader('Cache-Control: max-age=10000, immutable');

      response.data.pipe(webp).pipe(res);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
    });
});

spaController.all('*', (_req, res) => {
  fs.readFile(
    path.resolve(__dirname, '..', '..', 'dist', 'index.html'),
    'utf-8',
    (err, data) => {
      if (err) {
        throw err;
      }

      res.send(data);
    },
  );
});

module.exports = {
  spaController,
};
