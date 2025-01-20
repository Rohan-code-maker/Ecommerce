import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

 const verifyJWT = asyncHandler(async (req, _, next) => {
    const token = 
    req.cookies?.accessToken ||
    req.Header("Authorization")?.replace("Bearer ", "")

    if(!token){
        throw new ApiError(HTTP_UNAUTHORIZED,"Unauthorized request")
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    
    const user = await User.findById(decodedToken?._id)

    if(!user){
        throw new ApiError(HTTP_UNAUTHORIZED,"Invalid token")
    }

    req.user = user
    next()
})

const optionalVerifyToken = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (err) {
            return next();
        }
        next();
    });
};

export { verifyJWT, optionalVerifyToken };