import "./signIn.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import Oauth from "../../components/Oauth/Oauth";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      Navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  console.log(formData);

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="log-in">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Email"
          id="email"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="sign-in-btn" disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </button>
        <Oauth />
      </form>
      <div className="no-account">
        <p>Dont have an account?</p>
        <Link to={"/Sign-up"} className="Sign-Up">
          Sign Up
        </Link>
      </div>
      {error && <p className="error-signIn">{error}</p>}
    </div>
  );
}

export default SignIn;
