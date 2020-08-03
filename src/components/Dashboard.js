import React, { useContext, useState, useEffect } from "react";
import Movie from "./Movie";
import AuthGlobal from "../context/store/AuthGlobal";

export default function Dashboard(props) {
  const context = useContext(AuthGlobal);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null
    ) {
      props.history.push("/");
    }
    setShowChild(true);

    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      fetch("http://localhost:3001/server/usuarios", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: jwt,
        },
      }).then((res) => res.json());
    }
  }, [context.stateUser.isAuthenticated, props.history]);

  if (!showChild) {
    return null;
  } else {
    return <Movie userID={context.stateUser.user.usuariobd._id}></Movie>;
  }
}
