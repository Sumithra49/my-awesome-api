const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const header = req.headers("authorization");
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "token not found" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
    if (err) throw new Error(err.message);
    if (result) {
      req.user = result;
      next();
    }
  });
};

module.exports = auth;
