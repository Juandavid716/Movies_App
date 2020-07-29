import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  left: 0px;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: 2.77778rem;
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 0.833333rem;
  font-weight: 500;
  color: white;
  background: rgb(219, 112, 147);
  transition: background 300ms ease-out 0s;
  padding: 0px;
`;

export const DivNavbar = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 1.11111rem;
`;
export const Wrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;
export const NavLinks = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 1.66667rem;
  flex: 0 0 auto;
`;
export const Alinks = styled.a`
  display: inline-block;
  line-height: 2.77778rem;
  cursor: pointer;
  letter-spacing: 0.0222222rem;
  color: currentcolor;
  flex: 0 0 auto;
  transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
  margin-right: 10px;
`;

export const Button = styled.button`
  background: white;
  color: #795548;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #795548;
  border-radius: 3px;
  cursor: pointer;
`;
export const EndWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;
export const EndNav = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 auto;
`;
