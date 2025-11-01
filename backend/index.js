import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "../app.js";
dotenv.config();

connectDB()
 .then(()=>{
  try {
    app.listen(process.env.PORT || 8000 , ()=>{
    console.log("App listening on PORT :" ,process.env.PORT);
  });
  } catch (error) {
    console("app startup error : ", error)
  }
  
})
 .catch("MONGODB CONNECTION ERROR : ", error)

// (async()=>{
//   try{
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//    app.on("error", (error) => {
//     console.log("ERROR: " , error);
//     throw error;
//    });
//    app.listen(process.env.PORT, () =>{
//     console.log("Server Running on Port: ", process.env.PORT)
//    });
//   }
//   catch(error){
//     console.log("ERROR", error)
//     throw error;
//   }
// })()
// const app = express();
// import cors from "cors"; // ✅ add this
// app.use(cors());

// const port = process.env.PORT || 3000;

// app.get("/",(req,res)=>{
//     res.send("hello test")
// });

// app.get("/google",(req,res)=>{
//     res.send("hello tgere")
// });

// app.get("/jokes", (req,res)=>{
//     const dadJokes = [
//   {
//     jokeId: 1,
//     title: "Invisible Man",
//     joke: "I told my wife she should embrace her mistakes... She gave me a hug."
//   },
//   {
//     jokeId: 2,
//     title: "Parallel Lines",
//     joke: "Parallel lines have so much in common. It’s a shame they’ll never meet."
//   },
//   {
//     jokeId: 3,
//     title: "Skeleton Fight",
//     joke: "Why don’t skeletons fight each other? They don’t have the guts."
//   },
//   {
//     jokeId: 4,
//     title: "Cheese Factory",
//     joke: "Did you hear about the explosion at the cheese factory? There was nothing left but de-brie."
//   },
//   {
//     jokeId: 5,
//     title: "Elevator Joke",
//     joke: "I used to hate elevators, but now I find them uplifting."
//   }
// ];
//     res.json(dadJokes);

// });

