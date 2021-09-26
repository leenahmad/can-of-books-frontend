import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user } = useAuth0();

  return <div>
        <h1> Welcome to my website</h1>
        <br></br>
        <h2> Hello {user.name}</h2>
        <h2> email: {user.email}</h2>
      </div>;
}

export default Profile;
