const jwt = require("jsonwebtoken");
const jwtUser = require("../model/jwtUser");
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decodedToken = jwt.decode(token, { complete: true });
    const user = await jwtUser.find({ _id: decodedToken.id });
    if (user) {
      next();
    } else {
      res.redirect("/auth_login");
    }
  } catch (error) {
    console.log(error);
  }
};
