const Message = require("../models/message.model");
const datetime = new Date();
const jwt_decode = require("jwt-decode");

//create new message
const createMessage = async (req, res) => {
  const accessToken = req.headers.authorization.split(' ')[1];
  var decoded = jwt_decode(accessToken);
  if (req.body) {
    const message = new Message({
      subject: req.body.subject,
      message: req.body.message,
      user_email: req.body.user_email,
      user_role: req.body.user_role,
      created_date: datetime,
    });

    try {
      if(decoded.permissions.includes("upload:message")){
      const newMessage = await message.save();
      res.status(201).json(newMessage);
      }
      else{
        res.status(401).json({"message":"Unauthorized acess"});
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};



//view all the messages
const viewAllMessages = async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    var decoded = jwt_decode(accessToken);
    if(decoded.permissions.includes("upload:message")){
    const messages = await Message.find({});
    res.status(201).json(messages);
    }
    else{
      res.status(401).json({"message":"Unauthorized acess"});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMessage,
  viewAllMessages,
};
