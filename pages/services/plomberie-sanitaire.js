import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { IoPhonePortrait } from "react-icons/io5";

function plomberie() {
  return (
    <Layout>
      <Head>
        <title>Darky Plumbing - Services plomberie</title>
      </Head>
      <div className="main">
        <div className="bg-hero">
          <img
            src="/images/service/robinet.jpg"
            alt="bg-service-plomberie-sanitaire"
          />
          <div className="cover-bg"></div>
        </div>
        <div className="hero-text">
          <div className="section-title">
            <h1>Plomberie - sanitaire</h1>
          </div>

          <div className="section-slogan">
            <p>
              Les savoir-faire, les compétences, l’expertise et la force d’un
              réseau de professionnels.
            </p>
          </div>
        </div>
      </div>

      <section className="section-plomberie-sanitaire">
        <div className="section-plomberie">
          <div className="container">
            <div className="wraper">
              <div className="section-heading">
                <h3>
                  Travaux de plomberie et installation d’équipements sanitaires
                </h3>

                <p>
                  <span>
                    Notre plombier est à votre disposition pour l’installation
                    d’équipements sanitaires. Au service des particuliers, nous
                    intervenons pour la{" "}
                    <strong>
                      mise en place de réseau de distribution d’eau.
                    </strong>
                  </span>

                  <span>
                    {" "}
                    Nous effectuons toutes les opérations nécessaires :
                    installation du compteur d’eau, mise en place de la
                    robinetterie et du contrôleur de circulation, raccordement
                    de la tuyauterie, installation des équipements sanitaires,
                    etc.
                  </span>

                  <span>
                    <strong>
                      Nous proposons également des services de dépannage et
                      d’entretien de plomberie.
                    </strong>{" "}
                    <br /> Si vous souhaitez faire nettoyer vos canalisations ou
                    déboucher la tuyauterie, n’hésitez pas à contacter notre
                    plombier.
                  </span>
                </p>
              </div>

              <div className="img-wrap">
                <img
                  src="/images/service/robinet.jpg"
                  alt="nos concept image"
                />
              </div>

              <div className="section-heading">
                <h3>Spécialistes en carrelage de salle de bain</h3>

                <p>
                  <span>
                    Entreprise spécialisée dans la pose de carrelage, nous
                    réalisons{" "}
                    <strong>
                      le revêtement de salle de bain et de sanitaires.
                    </strong>
                    Vous pouvez nous confier votre projet. Que ce soit pour
                    <strong>
                      carreler les murs ou le sol de votre salle d’eau
                    </strong>
                    , nous vous proposons des solutions sur mesure.
                  </span>

                  <span>
                    Choisissez le style de carrelage que vous souhaitez faire
                    poser, nous réalisons le revêtement au gré de vos envies.
                  </span>

                  <span>
                    Notre carreleur maîtrise toutes les étapes des opérations et
                    intervient aussi bien dans des pièces neuves qu’en
                    rénovation. Par ailleurs, sachez que nous pouvons concevoir
                    une <strong>salle de bain sur mesure.</strong>
                  </span>
                </p>
              </div>

              <div className="img-wrap">
                <img src="/images/baignoire.jpg" alt="nos concept image" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-color">
          <div className="container">
            <div className="flexy">
              <div className="section-title">
                <h3>
                  Des services de proximité adaptés à vos besoins en plomberie
                  sanitaire
                </h3>
              </div>

              <div className="phone">
                <IoPhonePortrait size="21" />
                <a
                  href="tel:+213551739299"
                  rel="noopener noreferrer"
                  title="numéro téléphone"
                >
                  +213 551 73 92 99
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default plomberie;
