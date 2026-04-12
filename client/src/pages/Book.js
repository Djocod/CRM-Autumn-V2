import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Book = () => {
  const [dataWishlist, setDataWishlist] = useState([]);
  // const [usersCount, setUsersCount] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/wishlist")
      .then((res) => setDataWishlist(res.data.wishlist));

    // axios
    //   .get(`http://localhost:8000/api/users`)
    //   .then((res) => setUsersCount(res.data.user));
  }, []);

  return (
    <div className="body-wishlist">
      <h2>Sélections</h2>
      <div className="recent-wishlist">
        {dataWishlist && dataWishlist.filter((wish) => wish.length <= 2)}
        <ul>
          <li>Je suis une selection</li>
          <li>Je suis une selection</li>
          <li>Je suis une selection</li>
        </ul>
      </div>
      <div className="new-selection">
        <p>---------------------</p>
        <NavLink to={"/Wishlist"}>Nouvelle sélection</NavLink>
      </div>
      <Navigation />
    </div>
  );
};

export default Book;
