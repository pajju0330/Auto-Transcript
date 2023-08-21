require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/connect');
const port = process.env.PORT || 5000;
const applicantRouter = require('./routes/applicantRoutes');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes')

app.use(cors());
app.use(express.static('public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
app.use('/api/v1/applicants', applicantRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/courses', courseRouter);

app.all('*', (req, res) => {
  res.send('404 not found');
});

const start = async (URL) => {
  try {
    await connectDB(URL);
    app.listen(port, () => console.log(`app is listening at port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start(process.env.MONGO_URI);
