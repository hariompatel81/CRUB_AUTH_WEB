const { validationResult } = require("express-validator");
const User = require("./../models/user.model");
const {encryptPassword, comparePassword, generateToken} = require("./../utils/helper");


exports.Signup = async (req, res) => {
  try {
    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, password, age } = req.body;

    //check user
    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    //encrypt password
    const hashPassword = await encryptPassword(password);

    const newUser = {
      name,
      email,
      password: hashPassword,
      age: age || undefined,
    };

    //create user
    const user = await User.create(newUser);

    const userWithoutPass = user.toObject();
    delete userWithoutPass.password;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userWithoutPass,
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.Login = async (req,res) => {
  try{
  //validation

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  const {email, password} = req.body;
  //check user
  const user = await User.findOne({email}).select("+password");

  if(!user){
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
      statusCode: 401
    });
  }

    //compare password
    const isMatch = await comparePassword(password, user.password);

    if(!isMatch){
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        statusCode:402 
      });
    }

    //generate token
    const token = generateToken({userId: user._id });

    return res.status(200).json({
      success: true,
      message: "login successfull",
      token: token
    });



  }catch(error){
    console.error("Error:",error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}
