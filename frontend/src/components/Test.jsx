import { useState , useEffect} from "react";
import axios from "axios";
import "../styles/Test.css"
export const Test=()=>{
  const [jokes,setJokes]= useState([])
  const getJokes = async() =>{
    const res = await axios.get("http://157.230.246.239:3000/jokes");
    setJokes(res.data);
  }
 
    useEffect(() => {
      getJokes();
    }, []);

    return (
      <div>
        <h1 className="text-3xl font-bold underline bg-blue-400"> Hello world! </h1>
        {jokes.map(({joke},index)=>(
          <p className="bg-amber-500 text-center text-black text-3xl" id={index}>{joke.joke}</p>

        ))}
        </div>
    );
}