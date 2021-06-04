import React from "react";
import Link from "next/link";
import {
  IoMenu,
  IoClose,
  IoMail,
  IoCall,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";
import DarkyLogo from "./icon/DarkyLogo";

function Menu({
  toggle,
  isopen,
  toggleContact,
  toggly,
  isClicked,
  toggleClicked,
}) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>
              <div className="section-logo">
                <DarkyLogo height={"100%"} width={"130px"} fill={"#fff"} />
              </div>
            </a>
          </Link>

          <div className="section-links">
            <Link href="/services">
              <a>Services</a>
            </Link>
            <Link href="/about">
              <a>A propos</a>
            </Link>

            <a onClick={toggly}>Contact</a>
          </div>

          <div className="section-mobile" onClick={toggle}>
            {isopen ? (
              <IoClose size="30" color={"#fff"} />
            ) : (
              <IoMenu size="30" color={"#fff"} />
            )}
          </div>
        </nav>
      </header>

      <div className={`menu-mobile${isopen ? " active" : ""}`}>
        <div className="sec-link">
          <div className="set-linked">
            <Link href="/">
              <a>Accueil</a>
            </Link>
            <div className="linked-services">
              <div className="flex-service">
                <Link href="/services">
                  <a>Services</a>
                </Link>

                <div className="btn-activable" onClick={toggleClicked}>
                  {!isClicked ? (
                    <IoChevronDown size="25" color="#fff" />
                  ) : (
                    <IoChevronUp size="25" color="#fff" />
                  )}
                </div>
              </div>
              <div className={`links ${isClicked ? "active" : ""}`}>
                <Link href="/services/plomberie-sanitaire">
                  <a>plomberie-sanitaire</a>
                </Link>
                <Link href="/services/chauffage-centrale">
                  <a>chauffage-centrale</a>
                </Link>
                <Link href="/services/installation-piscine">
                  <a>installation-piscine</a>
                </Link>
                <Link href="/services/assainissement">
                  <a>assainissement</a>
                </Link>
              </div>
            </div>
            <Link href="/about">
              <a>A propos</a>
            </Link>
            <a onClick={toggleContact}>Contact</a>
          </div>

          <div className="sec-info">
            <span className="trait-separation"></span>
            <div className="ico-email">
              <IoMail size="16" color={"#eeeeee"} />
              <p>darky.plumbing@gmail.com</p>
            </div>
            <div className="ico-numero">
              <IoCall size="16" color={"#eeeeee"} />
              <p>+213 551 73 92 99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
