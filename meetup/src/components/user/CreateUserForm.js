import { useRef } from "react";

import classes from "./CreateUserForm.module.css";

function CreateUserForm(props){
    
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const mobileInputRef = useRef();
    const passwordInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredFirstName = firstNameInputRef.current.value;
      const enteredLastName = lastNameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredMobile = mobileInputRef.current.value;
      const enteredPwd = passwordInputRef.current.value;

  
      const userData = {
          firstName: enteredFirstName,
          lastName: enteredLastName,
          email: enteredEmail,
          mobile: enteredMobile,
          password: enteredPwd,
      };
  
      props.onCreateUser(userData);
      console.log(userData);
    }
  
    return (
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" required id="firstName" ref={firstNameInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" required id="lastName" ref={lastNameInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" required id="email" ref={emailInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" required id="password" ref={passwordInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="mobile">Mobile No.</label>
            <input type="text" required id="mobile" ref={mobileInputRef}></input>
          </div>
          <div className={classes.actions}>
            <button>Create User</button>
          </div>
        </form>
    );
  
  }
  
  export default CreateUserForm;
  