import React, { useState, useEffect } from "react";
import Menu from "./Menu";

function Layout(props) {
  const [isopen, setIsopen] = useState(false);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 868px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);

    if (matches) setIsopen(false);
    return () => {
      media.removeListener(listener);
    };
  }, [matches, "(min-width: 868px)"]);

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
