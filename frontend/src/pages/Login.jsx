import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, confirmPassword, 
            role: "Patient"
            //role: ["Admin", "Patient", "Doctor"] 
            },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        //.then((res) => {
          toast.success(response.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
         // setEmail("");
         // setPassword("");
        //  setConfirmPassword("");
        
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }



/*
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/user/login",
      { email, password, confirmPassword },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );

    toast.success(response.data.message);
    setIsAuthenticated(true);

    // Check if the logged-in user is an admin and navigate accordingly
    if (response.data.user.role === "Admin") {
      navigateTo("/dashboard/index.html");
    } else {
      navigateTo("/");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

*/




  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Students & Staff Members of SHUATS shall Login using thier University provided E-mail ID to avail Cashless Treatment
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;




