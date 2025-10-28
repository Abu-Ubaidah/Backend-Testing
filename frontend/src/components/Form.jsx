import { useState } from "react"
import { loginUser } from "../services/apiService";

export const Form=()=>{
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const handleSubmit = async() =>{

        const response = await loginUser(formData);
        console.log(response.data.message);
        if (response.data.message != "Login successful"){
            alert(response.data.message);
        }

    }

    return (
      <div className="login-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="Enter E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );


}
