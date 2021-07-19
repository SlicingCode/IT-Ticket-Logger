const { TrendingUpTwoTone } = require('@material-ui/icons');
const mongoose = require('mongoose');
const { truncateSync } = require('original-fs');

const connectDB = async () => {
  try {
    const conn = mongoose.connect(
      'mongodb+srv://test:test1234@issuelogger.dcxqq.mongodb.net/issuelogger?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// export function
module.exports = connectDB;
