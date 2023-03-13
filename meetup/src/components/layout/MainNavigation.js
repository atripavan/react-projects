import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  if (
    window.location.pathname === "/user"
  ) {
    return null;
  } else {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>React meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/all-meetups">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">New Meetups</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MainNavigation;
