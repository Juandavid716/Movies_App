import React, { useEffect, useContext, useState } from "react";
import { Center, Form, H1, WrappLogin, Input, Button } from "./styles";
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
      props.history.push("/");
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
      <Center>
        <Form onSubmit={handleSubmit}>
          <H1>Login</H1>
          <WrappLogin>
            <Input
              placeholder="Ingrese Usuario"
              onChange={(e) => setcorreo(e.target.value)}
              id="correo"
              name="correo"
              value={correo}
              autoComplete="off"
            />
            <Input
              type="password"
              placeholder="Ingrese Clave"
              onChange={(e) => setclave(e.target.value)}
              id="clave"
              name="clave"
              value={clave}
            />
            <br />

            <Button type="submit">Ingresar</Button>
            {error ? <Error mensaje={error} /> : null}
          </WrappLogin>
        </Form>
      </Center>
    );
  }
}
