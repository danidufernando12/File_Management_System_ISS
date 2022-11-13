const File = require("../models/file.model");
const jwt_decode = require("jwt-decode");
const axios = require('axios');
const datetime = new Date();
const jwtAuthz = require("express-jwt-authz");

const check =checkPermissions = (permissions) => {
  return jwtAuthz([permissions], {
    customScopeKey: "permissions",
    checkAllScopes: true,
    failWithError: true
  });
};

//upload a new file
const uploadFiles = async (req, res) => {
  const accessToken = req.headers.authorization.split(' ')[1];
  var decoded = jwt_decode(accessToken);
  if (req.body && decoded.permissions.includes("upload:file")) {
    const file = new File({
      subject: req.body.subject,
      file: req.file.originalname,
      user_email: req.body.user_email,
      user_role: req.body.user_role,
      created_date: datetime,
    });
    try {
      const newFile = await file.save();
      res.status(201).json(newFile);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }else{
    res.status(401).json({"message":"Unauthorized acess"});
  }
};


//retrieve all the file
const viewAllFiles = async (req ,res) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    var decoded = jwt_decode(accessToken);
    if(decoded.permissions.includes("upload:file")){
    const files = await File.find({});
    res.status(201).json(files);
    }
    else{
      res.status(401).json({"message":"Unauthorized acess"});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  uploadFiles,
  viewAllFiles,
};
