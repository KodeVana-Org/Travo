// const jwt = require('jsonwebtoken');


// function verifyToken(req, res, next) {
  
//   const token = req.headers.authorization; 

//   if (!token) {
//     return res.status(403).json({ error: 'Token not provided' });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: 'Invalid token' });
//     }
//     req.user = decoded; 
//     next(); 
//   });
// }

// module.exports = verifyToken;
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: 'Token not provided' });
  }

  jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;