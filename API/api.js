const express = require("express");
const router = express.Router();

const auth = require("../routes/Authantication/auth");
router.use("/auth", auth);

const usermanagement = require("../routes/UserManagement/Staff/usermanagement");
router.use("/usermanagement", usermanagement);

const DeleteUsers = require("../routes/UserManagement/Staff/DeleteUsers");
router.use("/deletemanageusers", DeleteUsers);

const Contact = require("../routes/UserManagement/Staff/Contact");
router.use("/viewmore", Contact);

const UsersDetails = require("../routes/UserManagement/User/usermanagement");
router.use("/usermanage", UsersDetails);

const DeleteUsersDetails = require("../routes/UserManagement/User/DeleteUsers");
router.use("/deleteusers", DeleteUsersDetails);

const ContactUsers = require("../routes/UserManagement/User/Contact");
router.use("/contactusers", ContactUsers);


const Payment = require("../routes/Payment/Payment");
router.use("/bill", Payment);

const TemplateRoute = require("../routes/Template/TemplateRoute");
router.use("/template", TemplateRoute);


module.exports = router;
