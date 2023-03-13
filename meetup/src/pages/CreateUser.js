
import { useNavigate } from "react-router-dom";
import CreateUserForm from "../components/user/CreateUserForm";
import axios from "axios";

function CreateUser(){

const nav = useNavigate();  
    
  function createUserHandler(userData) {
    const json = JSON.stringify(userData);
    const blob = new Blob([json], {
      type: "application/json",
    });

    var formData = new FormData();
    formData.append("cap", blob);
    // formData.append('file', this.state.imageFile);

    axios
      .post("http://localhost:8090/api/user", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        nav("/");
      });
  }

    return (
        <section>
          <h1>User Registration</h1>
          <CreateUserForm onCreateUser={createUserHandler} />
        </section>
      );
}

export default CreateUser;