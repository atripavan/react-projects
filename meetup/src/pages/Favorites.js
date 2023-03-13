import { useContext } from "react";
import FavoritesContext from "../components/store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favCntxt = useContext(FavoritesContext);
  let content;
  if (favCntxt.totalFavorites === 0) {
    content = <p>You got no favorites. Make some</p>;
  } else {
    content = <MeetupList meetups={favCntxt.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
