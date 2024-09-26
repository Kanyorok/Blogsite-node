// create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {
    // Create JWT token
    const token = user.getJwToken();

    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'DEVELOPMENT', // Use 'secure' in production for HTTPS
        sameSite: 'None' // Allows cross-site cookie usage
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
};

module.exports = sendToken;