import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  // For Navigation, instead of using <Link> you can also use useNavigate
  let navigate = useNavigate();

  // To get the params (data) from URL

  let { username } = useParams();
  return (
    <div>
      <h1>Profile page for {username}</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Redirect to about us page
      </button>
    </div>
  );
};

export default Profile;
