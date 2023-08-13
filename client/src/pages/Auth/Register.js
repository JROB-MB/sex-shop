import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      if (res.data.success) {
        toast.success(res && res.data.message);
        navigate("/login");
      } else {
        toast.error(res && res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <>
    
      <div backgroundColor="#8E7CC3" className="div">
        <div className="div-2">
          <div className="div-3">
            <picture>
              <img src='images/starbackground.png'>
                
              </img>
            </picture>
          </div>
        </div>
        <form onSubmit={handleSubmit}>

        <div className="div-4">
          <h2 className="h2">Register</h2>
          <div className="div-5">
            <label for="username" className="label">
              Username
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
              className="form-control"
              id="exampleInputEmail1"
              required
              autoFocus
            />
          </div>
          <div className="div-6">
            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="div-7">
            <label for="email" className="label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="div-8">
            <label for="cellphone" className="label">
              Cellphone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your cellphone number"
              required
            />
          </div>
          <div className="div-9">
            <label for="address" className="label">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="div-10">
            <label for="position" className="label">
              Favorite Position
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your favorite position"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        </form>

      </div>
      <style jsx>{`
        .div {
          align-items: center;
          background-color: rgb(142, 124, 195);
          display: flex;
          height: 100%;
          
          justify-content: center;
        }
        .div-2 {
          flex-basis: 0%;
          flex-grow: 1;
          height: 100%;
        }
        .div-3 {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          position: relative;
        }
        .image {
          object-fit: cover;
          object-position: center;
        }
        .div-4 {
          background-color: rgb(255, 255, 255);
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
          flex-grow: 1;
          justify-content: center;
          padding-bottom: 30px;
          padding-left: 58px;
          padding-right: 91px;
          padding-top: 30px;
          margin-right: 86px;
        }
        .h2 {
          color: rgb(51, 51, 51);
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .div-5 {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
        }
        .label {
          color: rgb(102, 102, 102);
          flex-basis: 120px;
          font-size: 14px;
          margin-right: 10px;
          text-align: right;
        }
        .input {
          border-bottom: 1px solid rgb(221, 221, 221);
          border-bottom-color: rgb(221, 221, 221);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(221, 221, 221);
          border-left: 1px solid rgb(221, 221, 221);
          border-left-color: rgb(221, 221, 221);
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 4px;
          border-right: 1px solid rgb(221, 221, 221);
          border-right-color: rgb(221, 221, 221);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(221, 221, 221);
          border-top-color: rgb(221, 221, 221);
          border-top-left-radius: 4px;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          flex-basis: 0%;
          flex-grow: 1;
          font-size: 14px;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 10px;
        }
        .div-6 {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
        }
        .div-7 {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
        }
        .div-8 {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
        }
        .div-9 {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
        }
        .div-10 {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
        }
        .button {
          all: unset;
          background-color: rgb(51, 51, 51);
          border-bottom: none;
          border-color: rgb(255, 255, 255);
          border-left: none;
          border-radius: 4px;
          border-right: none;
          border-top: none;
          border-top-left-radius: 4px;
          color: rgb(255, 255, 255);
          cursor: pointer;
          font-size: 14px;
          margin-left: auto;
          padding-bottom: 8px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 8px;
          margin-right: 194px;
        }
      `}</style>
    </>
  );
};

export default Register;
