import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { useContext } from "react";
import UsersContext from "../store/users-context";

function MeetupList(props) {
  const users = useContext(UsersContext);
  return (
    <ul className={classes.list}>
    <h3>Hi {users.savedUser.firstName} !</h3>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.imgUrl}
          title={meetup.name}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
