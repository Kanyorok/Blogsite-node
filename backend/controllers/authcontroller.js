const User = require('../models/user');
const catchAsyncError = require('../middleware/catchasyncErrors');
const sendToken = require('../utils/jwtTokens');
// Register user => /api/v1/register
exports.registerUser = catchAsyncError (async(req, res, next) => {
    console.log(req.body); 
    const { email, name, photo, Bio, Password } = req.body;
   
    const user = await User.create({
        email, 
        name, 
        photo, 
        Bio, 
        Password
    });

    sendToken(user, 200, res);
    
})