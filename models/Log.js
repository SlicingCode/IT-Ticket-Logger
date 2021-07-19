const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Issue text required'],
  },
  priority: {
    type: String,
    default: 'low',
    enum: ['low', 'moderate', 'high'],
  },
  user: {
    type: String,
    trim: true,
    required: [true, 'User required'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Log', LogSchema);
