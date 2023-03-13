import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import CreateUser from "./pages/CreateUser";
import { LoginUser } from "./pages/LoginUser";

function App() {
  
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/all-meetups" element={<AllMeetupsPage />} exact />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/" element={<LoginUser />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
