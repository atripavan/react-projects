import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
import UsersContext from "../components/store/users-context";
import { useContext } from "react";

function AllMeetupsPage() {
  const usrCntxt = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    
    fetch("http://localhost:8080/api/user/meetups/"+usrCntxt.savedUser.id, {
      method: "GET"
    })
      .then((response) => {
        
        if (response.status === 401 || response.status === 500) {
          alert('Error while fetching meetups');
        } else 
          return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meet ups page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
