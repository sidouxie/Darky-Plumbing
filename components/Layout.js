import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import SeFooter from "./SeFooter";
import { animateScroll as scroll } from "react-scroll";

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

  const toggly = () => {
    scroll.scrollToBottom({
      smooth: true,
      duration: 2000,
    });
  };

  const toggleContact = () => {
    scroll.scrollToBottom({
      smooth: true,
      duration: 2000,
    });
    setIsopen(!isopen);
  };
  return (
    <>
      <Menu
        isopen={isopen}
        toggle={toggle}
        toggly={toggly}
        toggleContact={toggleContact}
      />
      {props.children}
      <SeFooter />
    </>
  );
}

export default Layout;
