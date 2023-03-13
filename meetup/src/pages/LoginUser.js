import React, { useState } from "react";
import { userService } from "../services/user.service";
import classes from "../components/user/CreateUserForm.module.css";

import UsersContext from "../components/store/users-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function LoginUser() {
  userService.logout();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const usrCntxt = useContext(UsersContext);
  const nav = useNavigate();
  const emailInputRef = useRef();
  const pwdInputRef = useRef();

  function handleChange(e) {}

  function handleSubmit(e) {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPwd = pwdInputRef.current.value;

    setSubmitted(true);
    setLoading(true);
    userService.login(enteredEmail, enteredPwd).then((user) => {
      usrCntxt.addUser(user);
      setLoading(false);
      nav('/all-meetups');
    });
  }

  function createUserHandler(){    
    nav('/user');
  }

  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form className={classes.form} name="form" onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Username/Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleChange}
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            ref={pwdInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button disabled={loading}>Login</button>
          {loading && (
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          )}
        </div>
        <div className={classes.actions}>
          <button onClick={createUserHandler} >Create User</button>
        </div>
       
      </form>
    </div>
  );
}

export { LoginUser };
