import React from "react";
import styled from "styled-components";

export default function Error({ mensaje }) {
  const Box = styled.div`
    text-align: center;
    width: 100%;
    padding: 20px;
    background-color: #f44336;
    color: white;
    margin-top: 15px;
  `;

  return <Box>{mensaje}</Box>;
}
