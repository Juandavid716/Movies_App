import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Form = styled.form`
  max-width: 400px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 2px solid #795548;
  border-radius: 17px;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 2em;
  padding-bottom: 3em;
  box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.25);
  background: #534c4c2b;
`;
export const H1 = styled.h1`
  font-weight: 700;
  color: #384047;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 1.2em;
  margin-top: 0.1em;
`;

export const WrappLogin = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  color: #607d8b;
  background-color: #ffffff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  border: none;
  border-radius: 4px;
  padding: 1em;
  margin-bottom: 1.2em;
  width: 100%;
  font-size: 17px;
`;

export const Button = styled.button`
    background: #795548;
    color: white;
    font-size: 1em;
    padding: 10px 5px 10px 5px;
    border: 2px solid #795548;
    border-radius: 3px;
    width: 100%;
    margin-top:1em
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 200ms ease-in-out;
    :hover{  
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
            transform: translateY(-4px);
    }
`;

export const Table = styled.table`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;
export const Thead = styled.thead`
  background-color: palevioletred;
  width: 400px;
  padding: 10px 5px 10px 5px;
  border-top: 1px #795548 solid;
  border-left: 1px #795548 solid;
  border-right: 1px #795548 solid;
`;
export const Tbody = styled.tbody`
  width: 400px;
  padding: 10px 5px 10px 5px;
  border-top: 1px #795548 solid;
  border-left: 1px #795548 solid;
  border-right: 1px #795548 solid;
  border-bottom: 1px #795548 solid;
`;
export const Td = styled.td`
  width: 200px;
  text-align: center;
`;
export const Th = styled.th`
  width: 200px;
`;
