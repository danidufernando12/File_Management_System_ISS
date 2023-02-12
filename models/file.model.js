const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({

    subject: {
        type: String,
        trime: true,
        required: true,
      },
      file: {
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

module.exports = mongoose.model("files", fileSchema);