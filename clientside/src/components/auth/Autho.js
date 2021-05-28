import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Autho() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    history.push("/login");
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
     <React.Fragment>
   {userData.user ? (
    <Navbar
      variant="dark"
      className=""
      style={{ display: "flex", flexDirection: "row-reverse", width:"100%" }}
    >
      
        <Button variant="danger" onClick={logout}>
          Logout
        </Button></Navbar>
      ) : null}
    </React.Fragment>
  );
}

export default Autho;
