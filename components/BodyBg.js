import React from "react";
import Link from "next/link";

function BodyBg() {
  return (
    <main className="main-body">
      <div className="main-info">
        <div className="sec-title">
          <h3>
            Exigez un service de qualité à des tarifs clairs et définis par
            avance
          </h3>
          <p>
            Faites appel à un plombier intègre intervenant à Alger pour vos
            déppannages
            <br /> et projets d'installation en plomberie.
          </p>
        </div>
        <button className="section-btn-sec">
          <Link href="/services">
            <a>Nos Services</a>
          </Link>
        </button>
      </div>
      <span className="trait-separation"></span>
    </main>
  );
}

export default BodyBg;
