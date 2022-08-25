const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://joshjankowski:joshjankowski@cluster0.ondugjq.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;