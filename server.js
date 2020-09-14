const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 6789;

app.use(morgan('dev'));
app.use(express.static('client/build'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
