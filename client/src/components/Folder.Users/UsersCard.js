import React from "react";
import { Link } from "react-router-dom";
//déstructuration classique JS
const UsersCard = ({ user, showLetter }) => {
  const firstLetter = user.last_name[0].toUpperCase();
  // console.log(user, "Depuis userscard");

  return (
    <div className="link-container">
      {showLetter && <p>{firstLetter}</p>}
      <Link
        to={`/users/${user.id}`}
        key={user.id}
        className="card-user-container"
      >
        <img
          src={user.picture_medium}
          alt={`${user.first_name} ${user.lastName}`}
        />
        <h3>
          {user.last_name} {user.first_name} <span>{user.nat}</span>
        </h3>
      </Link>
    </div>
  );
};

export default UsersCard;
