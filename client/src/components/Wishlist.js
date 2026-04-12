import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import UserWish from "./Folder.wish/UserWish";

const Wishlist = () => {
  const [usersData, setUsersData] = useState([]);
  const [userName, setUserName] = useState("");
  // console.log(usersData, userName, "Depuis Users");
  useEffect(() => {
    if (userName.length > 0) {
      axios
        .get(`http://localhost:8000/api/users/search?search=${userName}`)
        .then((res) => setUsersData(res.data.user));
    } else {
      axios
        .get(`http://localhost:8000/api/users`)
        .then((res) => setUsersData(res.data.user));
    }
  }, [userName]);
  return (
    <div className="body-wishlist">
      <div className="input-container">
        <i className="fa-brands fa-sistrix"></i>
        <input
          type="text"
          placeholder="Recherche"
          id="search-name"
          className="input-search"
          onChange={(e) => setUserName(e.target.value.toLowerCase())}
        />
      </div>
      {usersData &&
        usersData
          .sort((a, b) => a.last_name.localeCompare(b.last_name))
          .map((user, index, array) => {
            const currentLetter = user.last_name[0].toUpperCase();
            const letter =
              index > 0 ? array[index - 1].last_name[0].toUpperCase() : null;
            const showLetter = currentLetter !== letter;
            return (
              <UserWish key={user.id} user={user} showLetter={showLetter} />
            );
          })}
      <Navigation />
    </div>
  );
};

export default Wishlist;
