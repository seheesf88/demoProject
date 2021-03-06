const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "*");
  res.header(
    "Access-control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Method', 'PUT, GET, DELETE, PATCH, POST');
    return res.status(200).json({});
  }
  next();
});


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);


mongoose.connect(
  'mongodb+srv://test1:' +
  process.env.MONGO_ATLAS_PW +
  '@cluster0-s6o7f.mongodb.net/test?retryWrites=true&w=majority',
  {
  // useMongoClient: true
  useNewUrlParser: true
});

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


module.exports = app;
