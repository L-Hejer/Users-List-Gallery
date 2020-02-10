import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UsersList from "./views/UsersList";
import UsersPhotoGallery from "./views/UserPhotoGallery";
import store from "./store";
import { getPhotos } from "./js/actions/galleryActions";
import { loadUser } from "./js/actions/usersActions";

import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser(), []);
    store.dispatch(getPhotos(), []);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route exact path="/:userName/:id" component={UsersPhotoGallery} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
