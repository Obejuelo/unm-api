require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/news'));
app.use(require('./routes/images'));
app.use(require('./routes/email'));
app.use(require('./routes/users'));
app.use(require('./routes/login'));
app.use(require('./routes/session'));

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err) => {
	if (err) throw err;
	console.log('DB Online');
});

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});

module.exports = app;
