import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
    const token = 
    req.cookies?.accessToken ||
    req.Header("Authorization")?.replace("Bearer ", "")

    if(!token){
        throw new ApiError(401,"Unauthorized request")
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    console.log(decodedToken);
    
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

    if(!user){
        throw new ApiError(401,"Invalid token")
    }

    req.user = user
    next()
})