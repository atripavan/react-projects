import { createContext } from "react";
import { useState } from "react";

const UsersContext = createContext({
  savedUser: {},
  addUser: (usr) => {},
  removeUser: () => {},
  currentUser: "",
});

export function UsersContextProvider(props) {
  const [user, setUser] = useState({});

  function addUserHandler(usr) {
    setUser((prevUsr) => {
        // prevUsr = usr;
    //   let arr = prevUsr.concat(usr);
    //   if (usr != null) {
    //     context.currentUser = usr.email;
    //   }
      return usr;
    });
  }

  function removeUserHandler() {
    setUser((prevUsr) => {
      return {};
    });
  }

  const context = {
    savedUser: user,
    addUser: addUserHandler,
    removeUser: removeUserHandler
  };

  return (
    <UsersContext.Provider value={context}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
