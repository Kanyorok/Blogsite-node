const sendToken = (user, statusCode, res) => {
    //Create JWT Token
    const token = user.getJwToken();

    const options = {
        expires: new Date(
            Date.now() = process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'DEVELOPMENT',
        sameSite: 'None'
    }

    res.status(statusCode).cookie('token', token, options).json({
        succes: true,
        token,
        user
    });
};

module.exports = sendToken;