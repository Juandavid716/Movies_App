import React, { useEffect, useContext, useState } from "react";
import { Form, Input, Button } from "reactstrap";
import AuthGlobal from "../context/store/AuthGlobal";
import { loginUser } from "../context/actions/autentication.action";
import Error from "../components/Error";

export default function Login(props) {
  const context = useContext(AuthGlobal);
  const [correo, setcorreo] = useState("");
  const [clave, setclave] = useState("");
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
    };
    if (correo === "" || clave === "") {
      seterror("Ingrese datos correctamente");
    } else {
      loginUser(user, context.dispatch, seterror);
    }

    e.preventDefault();
  };

  if (!showChild) {
    return null;
  } else {
    return (
      <div className="center-form">
        <Form className="loginForm" onSubmit={handleSubmit}>
          <h1 id="title-login">Login </h1>

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
