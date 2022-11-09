import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link,useNavigate } from "react-router-dom";

const loginUser=(email,password)=>{
  return fetch(`https://reqres.in/api/login`,{
    method:"POST",
    headers:{
      "content-type":"Application/json"
    },
    body:JSON.stringify({email,password})
  })
  .then(response=>response.json())
}

function Login() {
  const [stat, setStat] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigation=useNavigate();
  const status=useContext(AuthContext);

  const mail=(event)=>{
    setEmail(event.target.value)
  }
  const pass=(event)=>{
    setPassword(event.target.value)
  }
  const handlesubmit=(event)=>{
    event.preventDefault();
    loginUser(email,password)
    .then(response=>{
      status.loginUser(response.token);
      navigation("/")
    })
  }

    const del = () => {
      setStat(true);
  }

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handlesubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" value={email} onChange={mail} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={pass}
            />
          </label>
        </div>
        <div style={{height:"50px",justifyContent:"center", paddingTop:"10px",backgroundColor:"#9F73AB"}} >
          <Link className="form-submit" to="/" >
            SUBMIT
          </Link>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default Login;
