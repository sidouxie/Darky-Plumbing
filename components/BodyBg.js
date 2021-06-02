import React from "react";
import Link from "next/link";
import IconTu from "./icon/IconTu";
import IconRa from "./icon/IconRa";
import IconDo from "./icon/IconDo";
import Devis from "./Devis";

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
            déppannages et projets d'installation en plomberie.
          </p>
        </div>
        <button className="section-btn-sec">
          <Link href="/services">
            <a>Nos Services</a>
          </Link>
        </button>
      </div>
      <span id="thiky" className="trait-separation"></span>

      <section className="section-nos-services">
        <div className="sec-title">
          <h2>
            <span className="thinner">Nos</span> Services
          </h2>
        </div>
        <div className="bg-section">
          <div className="container">
            <div className="bg-grid">
              <div className="section-1">
                <div className="sec-img">
                  <img
                    src="/images/baignoire.jpg"
                    alt="installation baignoire"
                  />
                  <div className="onglet">
                    <p>Installation</p>
                    <div className="trait"></div>
                  </div>
                </div>
                <div className="sec-icone">
                  <IconDo fill="#393e46" width={"100%"} height={"100%"} />
                </div>
              </div>

              <div className="section-2">
                <div className="sec-img">
                  <img
                    src="/images/levier_douche.jpg"
                    alt="installation baignoire"
                  />
                  <div className="onglet">
                    <p>Dépannage</p>
                    <div className="trait"></div>
                  </div>
                </div>
                <div className="sec-icone">
                  <IconTu fill="#393e46" width={"100%"} height={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-info-area">
        <div className="container">
          <div className="main-sec">
            <div className="sec-1">
              <div className="sec-textuel">
                <div className="sec-title">
                  <h2>
                    <span className="thinner">Pose</span> sanitaires
                  </h2>
                  <p>
                    Spécialisé dans la plomberie, je me charge de la pose de
                    baignoire, douche à l'italienne, WC, vasque... Une question?
                    <br /> Je vous <bold>conseille</bold> et vous{" "}
                    <bold>accompagne</bold> dans vos projets.
                  </p>
                </div>
              </div>
              <div className="sec-icone">
                <IconDo fill="#e7e7e7" width={140} height={140} />
              </div>
            </div>

            <div className="sec-2">
              <div className="sec-textuel">
                <div className="sec-title">
                  <h2>
                    <span className="thinner">Solution</span> fuite
                  </h2>
                  <p>
                    Une fuite d'eau ? Il est important d'intervenir{" "}
                    <bold>rapidement</bold> et de manière <bold>efficace</bold>{" "}
                    pour limiter les méfaits et atténuer le coût des{" "}
                    <bold>réparations.</bold>
                  </p>
                </div>
              </div>
              <div className="sec-icone">
                <IconTu fill="#e7e7e7" width={140} height={140} />
              </div>
            </div>

            <div className="sec-3">
              <div className="sec-textuel">
                <div className="sec-title">
                  <h2>
                    <span className="thinner">Rénovation</span> plomberie
                  </h2>
                  <p>
                    Étude et installation de votre solution de rénovation pour
                    un confort optimal, Si vous avez besoin d'un{" "}
                    <bold>conseil</bold> de plomberie, n'hésitez pas à me{" "}
                    <bold>contacter</bold>
                  </p>
                </div>
              </div>
              <div className="sec-icone">
                <IconRa fill="#e7e7e7" width={140} height={140} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-clientele">
        <div className="container">
          <div className="article-grid">
            <div className="article">
              <div className="sec-img">
                <img src="/images/cuisines.jpg" alt="cuisine moderne" />
              </div>
              <div className="sec-text">
                <h3>Clientèle & interventions</h3>
                <p>
                  Ma clientèle est assez vaste pouvant s'étendre du particulier
                  au professionnel.
                  <br />
                  Architecte, Agence immobilière, Particulier autant de clients
                  à satisfaire.
                  <br />
                  j'interviens également sur l'habitat neuf, la rénovation ainsi
                  que les dépannages de plomberie.
                </p>
              </div>
            </div>

            <div className="article">
              <div className="sec-img">
                <img src="/images/baignoire.jpg" alt="salle de bain moderne" />
              </div>
              <div className="sec-text">
                <h3>Lieux d'interventions</h3>
                <p>
                  Nous intervenons sur Alger et ses alentours comme :{" "}
                  <bold>Bab-El-Oued</bold>, <bold>Bouzareah</bold>,{" "}
                  <bold>Béni Messous</bold>,<bold>Ain Benian</bold>,
                  <bold>Staoueli</bold>, <bold>Chéraga</bold>,{" "}
                  <bold>Ouled Fayet</bold>, <bold>El Achour</bold>,{" "}
                  <bold>Draria</bold>, <bold>Birkhadem</bold>,{" "}
                  <bold>Saoula</bold>, <bold>Baba Hassen</bold>,{" "}
                  <bold>Souidania</bold>...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-devis">
        <div className="container">
          <div className="titling">
            <div className="sec-title">
              <h2>
                <span className="thinner">nos</span> Devis
              </h2>
              <div className="mini-title">
                Un service de qualité à des tarifs clairs et définis par avance.
              </div>
            </div>
          </div>

          <Devis />
        </div>
      </section>
    </main>
  );
}

export default BodyBg;
