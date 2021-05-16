import React, { useState } from "react";
import Menu from "./Menu";

function Layout(props) {
  const [isopen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isopen);
  };
  return (
    <>
      <Menu isopen={isopen} toggle={toggle} />
      {props.children}
    </>
  );
}

export default Layout;
