import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "not authenticated" });
  }
  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user=decoded
    next()
  }catch(err){
    return res.status(403).json({msg:"invalid token"})
  }
};

export {verifyToken}
