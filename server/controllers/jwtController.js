import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const auhtenticateToken = (req, res, next) => {
    const key = process.env.ACCESS_SECRET_KEY || "akashsinghbaghel3030";
    const authHeader = req.headers['authorization'];
    // console.log(authHeader)
    // Check if the Authorization header is present
    if (!authHeader) {  

      return res.status(401).json({ message: "Authorization header is missing" });
    }
  
    // Check if the header has the correct format (Bearer <token>)
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      return res.status(401).json({ message: "Invalid Authorization header format" });
    }
  
    // Verify the token
    // const decodedToken = jwt.decode(token);
    // console.log(decodedToken);
  
    jwt.verify(token, key, (error, user) => {
      if (error) {
        return res.status(403).json({ message: "Invalid access token" });
      }
  
      req.user = user;
      next();
    });
  };
  