const User = require('../models/user');
const catchAsyncError = require('../middleware/catchasyncErrors');
const sendToken = require('../utils/jwtTokens');
const ErrorHandler = require('../utils/errorHandler');

// Register user => /api/v1/register
exports.registerUser = catchAsyncError (async(req, res, next) => {
    
    const { email, name, photo, Bio, Password } = req.body;
   
    const user = await User.create({
        email, 
        name, 
        photo, 
        Bio, 
        Password
    });

    sendToken(user, 200, res);
    
});

// Login user => /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next)=> {
    const {email, password} = req.body;

    // check if email and password are entered by user
    if (!email || !password){
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Find user in db
    const user = await User.findOne({
        where: {email},
        attributes: {include: ['password']}
    });

    if (!user) {
        return next(new ErrorHandler('invalid Email or Password', 401));
    }
    // check if password provided is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('invalid Email or Password', 401));
    }

    sendToken(user, 200, res);
});

// Logout user /api/v1/logout
exports.logout = catchAsyncError(async(req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: 'Logged out',
    })
})