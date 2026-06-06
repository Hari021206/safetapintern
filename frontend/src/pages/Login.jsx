import {
  useState
} from "react";
import axios from "axios";
import {
  Link,
  useNavigate
} from "react-router-dom";
function Login(){
  const navigate =
  useNavigate();
  const [email,setEmail] =
  useState("");
  const [password,setPassword] =
  useState("");
  const submitHandler =
  async(e)=>{
    e.preventDefault();
    try{
      const response =
      await axios.post(
        "https://safetapintern.onrender.com/api/users/login",
        {
          email,
          password
        }
      );
      localStorage.setItem(
        "token",
        response.data.token
      );
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );
      alert("Login Success");
      navigate("/home");
    }catch(error){
      alert("Invalid Credentials");
    }
  };
  return(
    <div className="auth-page">
      <div className="auth-left">
        <h1>SafeTap</h1>
        <h2>
          Learn Digital Skills
          Without Fear
        </h2>
        <p>
          Practice messaging,
          payments, scam awareness
          and digital services in a
          safe interactive environment.
        </p>
      </div>
      <div className="auth-right">
        <form
          className="auth-form"
          onSubmit={submitHandler}
        >
          <h2>Welcome Back 👋</h2>
          <p className="auth-subtitle">
            Login to continue learning
          </p>
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
            Login
          </button>
          <p className="switch-text">
            Don't have an account?
            <Link to="/signup">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;