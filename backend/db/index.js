import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";
 
export const connectDB = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 
        console.log(`MONGODB CONNECTED!! DB HOST || ${connectionInstance}`);
        // console.dir(connectionInstance, { depth: null });
        console.log("Host:", connectionInstance.connection.host);

    }
    catch(error){
        console.log("MONDGO DB couldn't connect ERROE: ", error);
        process.exit(1)
    }
}




// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { DB_NAME } from "../constants.js";

// dotenv.config();
// const connectDB = async () => {
//     try{
//     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     }
//     catch (error){
//         console.log("MONGODB CONNECTION ERROR: ", error);
//         process.exit(1);
//     }
// }
