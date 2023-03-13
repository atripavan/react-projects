import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function NewMeetupPage() {
  const nav = useNavigate();
  function addMeetupHandler(meetupData) {
    const json = JSON.stringify(meetupData);
    const blob = new Blob([json], {
      type: "application/json",
    });

    var formData = new FormData();
    formData.append("cap", blob);
    // formData.append('file', this.state.imageFile);

    axios
      .post("http://localhost:8080/api/meetups", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        nav("/all-meetups");
      });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
