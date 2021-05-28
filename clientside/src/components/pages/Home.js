import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import Login from "../auth/Login";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, []);
  
  return (
    <div>
      {userData.user ? (
        <h1>Welcome </h1>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};

export default Home;
