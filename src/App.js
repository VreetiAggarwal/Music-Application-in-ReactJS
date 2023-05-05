import React from "react";
import { Routes, Route } from "react-router-dom";
import MusxHeader from "./components/home/Header";
import Mainpages from "./components/pages/Mainpage";
import FavPage from "./components/pages/Favorite";
import LibPage from "./components/pages/YourLibrary";
import ProfilePage from "./components/pages/Profile";
import DiscoverNew from "./components/home/Discover";
import ContentBody from "./components/home/Content";
import Play from "./components/home/Playlist";
import Songs from "./components/desc/SongDesc";
import LoginPage from "./components/pages/Loginpage";
import Merchandise from "./components/pages/Merch";
import FormSign from "./components/signup/Signup";

function App() {
  return (
    <div>
      <MusxHeader />
      <Routes>
        <Route path="/" element={<Mainpages />}></Route>
        <Route path="favorite" element={<FavPage />}></Route>
        <Route path="library" element={<LibPage />}></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="merch" element={<Merchandise />}></Route>
        <Route path="songdesc/:slug" element={<Songs />}></Route>
        <Route path="signup" element={<FormSign />}></Route>
      </Routes>
    </div>
  );
}

export default App;
