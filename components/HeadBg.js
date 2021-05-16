import React from "react";
import Link from "next/link";

function HeadBg() {
  return (
    <div className="main">
      <div className="bg-hero">
        <img src="/images/background.jpg" alt="bg-hero" />
        <div className="cover-bg"></div>
      </div>
      <div className="hero-text">
        <div className="section-desc">
          <p>puis-je trouver un plombier sur internet ?</p>
        </div>

        <div className="section-title">
          <h1>plombier de confiance à alger</h1>
        </div>

        <div className="section-slogan">
          <p>un service de qualité sans tromperie.</p>
        </div>

        <button className="section-btn">
          <Link href="/contact">
            <a>Contactez</a>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HeadBg;
