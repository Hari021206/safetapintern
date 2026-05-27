import {
  useState
} from "react";
import axios from "axios";
import {
  Link,
  useNavigate
} from "react-router-dom";
function Signup(){
  const navigate =
  useNavigate();
  const [name,setName] =
  useState("");
  const [email,setEmail] =
  useState("");
  const [password,setPassword] =
  useState("");
  const submitHandler =
  async(e)=>{
    e.preventDefault();
    try{
      await axios.post(
        "http://localhost:3200/api/users/register",
        {
          name,
          email,
          password
        }
      );
      alert("Signup Successful");
      navigate("/");
    }catch(error){
      alert("Signup Failed");
    }
  };
  return(
    <div className="auth-page">
      <div className="auth-left">
        <h1>SafeTap</h1>
        <h2>
          Build Digital
          Confidence
        </h2>
        <p>
          Join SafeTap and learn
          digital skills through
          realistic simulations.
        </p>
      </div>
      <div className="auth-right">
        <form
          className="auth-form"
          onSubmit={submitHandler}
        >
          <h2>Create Account ✨</h2>
          <p className="auth-subtitle">
            Signup to start learning
          </p>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>
            setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>
            setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>
            setPassword(e.target.value)}
          />
          <button type="submit">
            Signup
          </button>
          <p className="switch-text">
            Already have an account?
            <Link to="/">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;