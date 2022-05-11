const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const PORT = 5000;

const app = express();

app.use(cors());

app.use(routes);

app.use(
  '/static',
  express.static(__dirname + '/public', {
    maxAge: 86400,
  })
);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} -> http://localhost:${PORT}`);
});
