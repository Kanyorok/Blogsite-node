const dotenv = require('dotenv');
const app = require('./app');

// Set up the config file
dotenv.config({ path: 'backend/config/config.env'})

app.listen(process.env.PORT, ()=> {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
