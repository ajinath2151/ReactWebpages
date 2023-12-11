import React, { useState } from "react";
import imageAjinath from "./images/AjinathShinde.jpg";
import "./LoginFormStyle.css";
import validation from "./Validation";
const LoginForm = () => {

    const [values, setValues] = useState({
        name:'',
        password:''
    })
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setValues({...values,[e.target.name]:e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault();
        setErrors(validation(values));
    }

  return (
    <>
      <div className="wrap">
        <form action="" onSubmit={handleSubmit}>
          <div className="imgContainer">
            <img src={imageAjinath} alt="ajinath" />
          </div>

          <div className="container">
            <label htmlFor="">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="enter username"
              value={values.name}
              name="name"
              id="name1"
              onChange={handleChange}
              />
            {errors.name && <p style={{color:'red'}}>{errors.name}</p>}              
            <label htmlFor="">
              <b>Password</b>
            </label>
            <input
              type="Password"
              placeholder="enter password"
              name="password"
              value={values.password}
              id="password1"
              onChange={handleChange}
              />
              {errors.name && <p style={{color:'red'}}>{errors.password}</p>}              
            <button type="submit" className="loginButton">
              Login
            </button>
            <label>
            <input type="checkbox" /> Remember Me
            </label>

          </div>

          <div className="container" style={{ background: "#f1f1f1" }}>
          <button type="button" className="cancelButton">
            Cancel
            </button>
            <span className="password">
              Forgot <a href="_#"> password?</a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
