const JWT = require("jsonwebtoken");

module.exports = {
  generateToken: (user) => {
    try {
      return JWT.sign(
        {
          userId,
        },
        process.env.ACCESS_SECRET_TOKEN,
        {
          algorithm: "HS256",
          expiresIn: "1m",
        }
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  validateToken: (token) => {
    try {
      JWT.verify(token, process.env.ACCESS_SECRET_TOKEN, {
        algorithms: ["HS256"],
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  refreshToken: (token) => {
    try {
      return JWT.sign(
        {
          userId,
        },
        process.env.REFRESH_SECRET_TOKEN,
        {
          algorithm: "HS256",
          expiresIn: "3m",
        }
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  validateRefreshToken: (token) => {
    try {
      JWT.verify(token, process.env.REFRESH_SECRET_TOKEN, {
        algorithms: ["HS256"],
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
