 const express=require("express");
 const bodyParser=require("body-parser");
 const cors=require("cors");
 const connectDB =require('./connection');
 const app=express();
 const cookieParser = require("cookie-parser");
 const https = require('https');
 const path = require('path');
 const fs = require('fs');
 const { expressjwt: expressJwt } = require('express-jwt');
 const  jwks = require('jwks-rsa');
 const axios = require('axios');


 
 //server run in this port 8070
 const PORT = process.env.PORT || 8070;

 

//verify the token
const jwtCheck = expressJwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-4w8pxeptdxwrsrrw.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'this is unique identifier',
  issuer: 'https://dev-4w8pxeptdxwrsrrw.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

 //Connect data base
 connectDB();
 app.use(express.json());
 app.use(cookieParser());
 app.use(cors( ));
 
 app.use(bodyParser.json());

 //create SSL Server
 const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'certificate.pem')),
 },app)

//Getting the message route
const messageRoute = require('./routes/message.route');
app.use('/messages', messageRoute);

//Getting the files route
const fileRoute = require('./routes/file.route');
app.use('/files', fileRoute);

//error handling in server
app.use((error, req, res, next)=>{
  const status = error.status || 500
  const message = error.message || 'Internal server error'  
  res.status(status).send(message);

});

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    const status = 404;
    next(error);
  
  });

sslServer.listen(PORT,() =>{
    console.log(`Service is running on ${PORT}`);
});
