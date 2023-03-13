import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";
import UsersContext from "../../components/store/users-context";
import { useContext } from "react";
import { useState } from "react";
import Popup from "../ui/Popup";
import CheckboxSelectableGrid from "../widget/CheckboxSelectableGrid";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adrsInputRef = useRef();
  const descInputRef = useRef();
  const userIdInputRef = useRef();
  const ownerEmailInputRef = useRef();
  const usrCntxt = useContext(UsersContext);

  const [isOpen, setIsOpen] = useState(false);
  const [loadedUsers, setLoadedUsers] = useState([]);


  const userRows = [];


  const togglePopup = () => {
    
    fetch("http://localhost:8090/api/users", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8090/",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "X-CUSTOM, Content-Type",
        "Access-Control-Max-Age": "86400"
      },
    })
      .then((response) => {
        
        if (response.status === 401 || response.status === 500) {
          alert('Error while fetching users');
        } else 
          return response.json();
      })
      .then((data) => {
        for (const key in data) {
          const r = {
            userId: data[key].id,
            name: data[key].firstName,
          };
          userRows.push(r);
        }        
        setIsOpen(!isOpen);
        setLoadedUsers(userRows);
      });
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdrs = adrsInputRef.current.value;
    const entereddesc = descInputRef.current.value;
    const email = ownerEmailInputRef.current.value;
    const usrId = userIdInputRef.current.value;

    const meetupData = {
        name: enteredTitle,
        imgUrl: enteredImage,
        ownerEmail: email,
        address: enteredAdrs,
        description: entereddesc,
        userId : usrId
    };

    props.onAddMeetup(meetupData);
    console.log(meetupData);
  }
  
  const columns =[
    {key: 'userId', name: 'User ID'},
    {key: 'userName', name: 'Name'}
  ];


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={adrsInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="ownerEmail">Meetup Owner</label>
          <input type="text" required id="ownerEmail" disabled="true" ref={ownerEmailInputRef} value={usrCntxt.savedUser.email}></input>
          <input type="hidden" required id="userId" disabled="true" ref={userIdInputRef} value={usrCntxt.savedUser.id}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="description"
            required
            rows="5"
            ref={descInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button  onClick={togglePopup}>Add People</button>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
        { isOpen && <Popup
          content={<>
            <b>Select users</b>
            <CheckboxSelectableGrid cols={columns} rows={loadedUsers}></CheckboxSelectableGrid>
            <button>Submit</button>
          </>}
          handleClose={togglePopup}
      />}
      </form>
    </Card>
  );
}

export default NewMeetupForm;
