import axios from "axios";
const API_URL = "http://localhost:8080/login"
export const loginUser =async(formData)=>{
    try{
        const res = await axios.post(API_URL,formData)
        return res;

        } catch (error) {
            alert(error.response.data.message);
        throw new Error(error.response ? error.response.data : "Error occurred");
     }
};