import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

function MeetupItem(props) {
  const favCntxt = useContext(FavoritesContext);

  const itemIsFav =favCntxt.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if(itemIsFav){
      favCntxt.removeFavorite(props.id);
    } else {
      favCntxt.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFav ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
