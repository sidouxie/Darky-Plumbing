import React from "react";
import Link from "next/link";
import { IoMenu, IoClose, IoMail, IoCall } from "react-icons/io5";

function Menu({ toggle, isopen, toggleContact }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>
              <div className="section-logo">
                <img src="/darky_logo.svg" alt="Logo darky plumbing" />
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

            <a onClick={toggleContact}>Contact</a>
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
        <div className="sec-img">
          <img src="/images/baignoire.jpg" alt="salle de bain moderne" />
          <div className="cover-bg"></div>
        </div>

        <div className="sec-link">
          <div className="set-linked">
            <Link href="/">
              <a>Accueil</a>
            </Link>
            <Link href="/services">
              <a>Services</a>
            </Link>
            <Link href="/about">
              <a>A propos</a>
            </Link>
            <a onClick={toggleContact}>Contact</a>
          </div>

          <div className="sec-info">
            <span className="trait-separation"></span>
            <div className="ico-email">
              <IoMail size="20" color={"#eeeeee"} />
              <p>darky.plumbing@gmail.com</p>
            </div>
            <div className="ico-numero">
              <IoCall size="20" color={"#eeeeee"} />
              <p>+213 551 73 92 99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
