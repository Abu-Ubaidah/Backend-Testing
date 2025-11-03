import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler( async (req,res) =>{
    //first recive name email pass
    //validation
    //check if already exists
    //check for images , check for avatar
    // upload them to cloudnary if available, avatar
    //create user object save in db
    //remove password and refresh token
    //check for user creation
    //return response
    // encryption
    //response wiht refresh token or cookies
    const {fullName ,username , email, password} = req.body
    console.log("email: ", email);

    if(
        [fullName, email, username, password].some((field)=>
        field?.trim()==="")
    ){
        throw new ApiError(400, "All field are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if(existedUser) {
        throw new ApiError(409, "User with email or Username already exits")
    }

    const avatartLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    if(!avatartLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }
    
    const avatar = await uploadOnCloudinary(avatartLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(400, "Avatar image is required")
    }
    
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser){
        throw new ApiError(500, "something Went Worng while Registering User")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Created Succesfully")
    );
} );

export default registerUser;