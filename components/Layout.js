import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import SeFooter from "./SeFooter";
import { animateScroll as scroll } from "react-scroll";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

function Layout(props) {
  const [isopen, setIsopen] = useState(false);
  const [matches, setMatches] = useState(false);
  const [isClicked, setIsclicked] = useState(false);

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

  const toggleClicked = () => {
    setIsclicked(!isClicked);
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
        isClicked={isClicked}
        toggleClicked={toggleClicked}
        toggly={toggly}
        toggleContact={toggleContact}
      />
      {props.children}
      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        cookieName="Darky-Plumbing.ml cookies"
        style={{
          background: "rgba(0,0,0,0.95)",
          alignItems: "center",
          justifyContent: "center",
        }}
        buttonStyle={{
          background: "#05a3a7",
          padding: "10px 15px",
          borderRadius: "7px",
          color: "#fff",
          fontSize: "1rem",
        }}
        enableDeclineButton
        declineButtonStyle={{
          background: "transparent",
          padding: "5px 10px",
          border: "1px #fff solid",
          borderRadius: "7px",
          color: "#fff",
          fontSize: ".9rem",
        }}
        declineButtonText="Refuser"
        flipButtons
        expires={150}
      >
        <span
          className="text-cookies"
          style={{
            fontSize: "0.9rem",
            fontWeight: "300",
            letterSpacing: ".4px",
            lineHeight: "1.5",
          }}
        >
          Nous utilisons des cookies pour vous garantir la meilleure expèrience
          sur notre site. Si vous continuez à utiliser ce dernier, nous
          considérerons que vous acceptez l'utilisation des cookies.{" "}
        </span>
        <span>
          <Link
            rel="canonical"
            href="/politiques-de-confidentialite"
            id="savoir"
          >
            <a
              style={{
                fontWeight: "600",
                textDecoration: "underline",
                color: "#00adb5",
                marginLeft: "0.5rem",
              }}
            >
              En savoir plus
            </a>
          </Link>
        </span>
      </CookieConsent>
      <SeFooter />
    </>
  );
}

export default Layout;
