const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    subject: {
        type: String,
        trime: true,
        required: true,
      },
      message: {
        type: String,
        trime: true,
        required: true,
      },
      user_email: {
        type: String,
        trime: true,
        required: true,
      },
      user_role: {
        type: String,
        trime: true,
        required: true,
      },
     created_date: {
        type: Date,
        require: true,
      },
});

module.exports = mongoose.model("messages", messageSchema);