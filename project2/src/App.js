import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Route
        path="/"
        exact>
        <AllMeetupsPage />
      </Route>
      {/* <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favroites">
        <FavoritesPage />
      </Route>  */}
    </div>
  );
}

export default App;
