const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create new Schema
const OrgprofileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'orgs',
  },
  handle: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  testers: [
    {
      fullName: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      }
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = orgProfile = mongoose.model('OrgProfile', OrgprofileSchema)
