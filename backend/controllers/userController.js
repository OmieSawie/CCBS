const userModel = require("../models/userModel");

exports.postCreateUser = async (req, res) => {
  const newUser = new userModel({
    emailId: req.body.emailId,
    userName: req.body.name,
    phoneNo: req.body.phoneNo,
    role: req.body.role,
    rollNo: req.body.rollNo || null,
  });
  await newUser.save();
  req.user=newUser;
  console.log(req.user);
  res.status(200).json({
    status: "User Created",
    newUser,
  });
};

exports.getOneUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    const userData=await user.populate("bookings");
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).send("Error in getting user" + err);
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find({});
    res.status(200).json(allUser);
  } catch (err) {
    res.status(500).send("Error in getting user" + err);
  }
};

exports.updateUserInfo = async (req, res) => {
  try {
    const updatedEmailId = req.body.emailId;
    const updatedName = req.body.name;
    const updatedPhoneNo = req.body.phoneNo;
    const updatedRollNo = req.body.rollNo;

    const updatedUser = await userModel.findById(req.params.userId);

    updatedUser.emailId = updatedEmailId;
    updatedUser.userName = updatedName;
    updatedUser.phoneNo = updatedPhoneNo;
    updatedUser.rollNo = updatedRollNo;

    await updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};
