import React, { useContext, useState, useEffect } from "react";
import Movie from "./Movie";
import AuthGlobal from "../context/store/AuthGlobal";
import { Table, Tbody, Thead, Td, Th } from "./styles";

export default function Dashboard(props) {
  const context = useContext(AuthGlobal);
  const [showChild, setShowChild] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

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
      })
        .then((res) => res.json())
        .then((data) => {
          setUsuarios(data.usuarios);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [context.stateUser.isAuthenticated, props.history]);

  if (!showChild) {
    return null;
  } else {
    return <Movie></Movie>;
  }
}
