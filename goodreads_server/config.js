// Require and configure dotenv
require("dotenv").config({ silent: true });

// Set up a config object and add all needed environment variables
const config = {
  PORT: process.env.PORT || 3000,
  API_URL: process.env.API_URL,
  OAUTH_URL: process.env.OAUTH_URL,
  ENV: process.env.NODE_ENV || "development",
  ROLLBAR_ACCESS_TOKEN: process.env.ROLLBAR_ACCESS_TOKEN,
  ROLLBAR_ACCESS_TOKEN_CLIENT_SIDE:
    process.env.ROLLBAR_ACCESS_TOKEN_CLIENT_SIDE,
  BASIC_USERNAME: process.env.BASIC_USERNAME,
  BASIC_PASSWORD: process.env.BASIC_PASSWORD,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  USER_CLIENT_ID: process.env.USER_CLIENT_ID,
  USER_CLIENT_SECRET: process.env.USER_CLIENT_SECRET
};

// Export the config object
module.exports = config;

