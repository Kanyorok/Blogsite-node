const User = require('../models/user');
const catchAsyncError = require('../middleware/catchasyncErrors');
const sendToken = require('../utils/jwtTokens');
// Register user => /api/v1/register
exports.registerUser = catchAsyncError (async(req, res, next) => {
    const { email, name, photo, Bio, password } = req.body;
   
    const user = await User.create({
        email, 
        name, 
        photo, 
        Bio, 
        password
    });

    sendToken(user, 200, res);
    
})