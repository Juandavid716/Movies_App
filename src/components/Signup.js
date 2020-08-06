import React, { useEffect, useContext, useState } from "react";
import { Form, Input, Button } from "reactstrap";
import AuthGlobal from "../context/store/AuthGlobal";
import Swal from "sweetalert2";
import Error from "../components/Error";
import axios from "axios";
export default function Signup(props) {
  const context = useContext(AuthGlobal);
  const [correo, setcorreo] = useState("");
  const [clave, setclave] = useState("");
  const [nombre, setnombre] = useState("");
  const [error, seterror] = useState("");
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.history.push("/search");
    }
    setShowChild(true);
  }, [context.stateUser.isAuthenticated, props.history]);

  const handleSubmit = (e) => {
    const user = {
      correo,
      clave,
      nombre,
    };
    if (correo === "" || clave === "" || nombre === "") {
      seterror("Ingrese datos correctamente");
    } else {
      axios.post(
        "https://moviesbackendcol.herokuapp.com/server/usuarios",
        user
      );
      Swal.fire({
        title: "User created!",
        text: " The user has been created successfully ",
        icon: "success",
        confirmButtonText: "Accept",
      });

      props.history.push("/login");
    }

    e.preventDefault();
  };

  if (!showChild) {
    return null;
  } else {
    return (
      <div className="center-form">
        <Form className="loginForm" onSubmit={handleSubmit}>
          <h1 id="title-login">Sign Up </h1>
          <Input
            placeholder="Ingrese nombre"
            onChange={(e) => setnombre(e.target.value)}
            id="nombre"
            name="nombre"
            value={nombre}
            autoComplete="on"
          />
          <Input
            placeholder="Ingrese Usuario"
            onChange={(e) => setcorreo(e.target.value)}
            id="correo"
            name="correo"
            value={correo}
            autoComplete="on"
          />
          <Input
            type="password"
            placeholder="Ingrese Clave"
            onChange={(e) => setclave(e.target.value)}
            id="clave"
            name="clave"
            value={clave}
            autoComplete="off"
          />
          <br />

          <Button type="submit">Ingresar</Button>
          {error ? <Error mensaje={error} /> : null}
        </Form>
      </div>
    );
  }
}
