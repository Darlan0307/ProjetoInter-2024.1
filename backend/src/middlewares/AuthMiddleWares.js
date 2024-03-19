import jsonwebtoken from "jsonwebtoken";

export function AuthMiddleWares(req,res,next){
  const { authorization } = req.headers

  if(!authorization){
    return res.status(401).json({message: "Token not provided"})
  }

  const [,token] = authorization.split(" ")

  try {
    const secret = process.env.SECRET
    const decoded = jsonwebtoken.verify(token,`${secret}`)
    const { id } = decoded
    req.userId=id;
    next();
    
  } catch (error) {
    return res.status(401).json({message: "Token invalid"}) 
  }
}