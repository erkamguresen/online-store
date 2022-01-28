// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))";

const JWT_SECRET = process.env.JWT_SECRET;
module.exports = JWT_SECRET;
