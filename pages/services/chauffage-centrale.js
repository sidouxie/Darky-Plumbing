import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { IoPhonePortrait } from "react-icons/io5";

function chauffage() {
  return (
    <Layout>
      <Head>
        <title>Darky Plumbing - Services chauffage centrale</title>
      </Head>
      <div className="main">
        <div className="bg-hero">
          <img
            src="/images/service/radiateur.jpg"
            alt="bg-service-plomberie-sanitaire"
          />
          <div className="cover-bg"></div>
        </div>
        <div className="hero-text">
          <div className="section-title">
            <h1>Chauffage centrale</h1>
          </div>

          <div className="section-slogan">
            <p>
              Les savoir-faire, les compétences, l’expertise et la force d’un
              réseau de professionnels.
            </p>
          </div>
        </div>
      </div>

      <section className="section-chauffage">
        <div className="container">
          <div className="wraper">
            <div className="section-heading">
              <h3>Les prestations de notre chauffagiste</h3>

              <p>
                <span>
                  Notre entreprise intervient pour{" "}
                  <strong>l’installation de système de chauffage.</strong> Nos
                  prestations concernent la pose de pompes à chaleur,
                  chaudières, radiateurs, chauffage électrique et au gaz, ainsi
                  que les appareils fonctionnant à{" "}
                  <strong>l’énergie renouvelable.</strong>
                </span>

                <span>
                  Vous pouvez également nous solliciter pour le dépannage et
                  l’entretien de vos appareils. Notre chauffagiste s’assurera de
                  détecter tous les dysfonctionnements et d’effectuer les
                  réparations afférentes.
                </span>

                <span>
                  Forts de <strong>nombreuses années d’expérience,</strong> nous
                  avons les ressources en main pour{" "}
                  <strong>
                    traiter vos demandes dans les meilleures conditions.
                  </strong>
                </span>
              </p>
            </div>

            <div className="img-wrap">
              <img
                src="/images/service/chauffage.jpg"
                alt="nos concept image"
              />
            </div>

            <div className="section-heading">
              <h3>Expertise et conseils</h3>

              <p>
                <span>
                  Vous ne savez pas quel appareil de chauffage est le plus
                  adapté à votre maison ? Notre expertise nous permet de vous
                  conseiller sur <strong>le système le plus performant.</strong>{" "}
                  C’est pourquoi nous nous déplaçons chez vous pour réaliser un
                  premier bilan thermique de vos locaux.{" "}
                  <strong>
                    C’est après que nous déterminerons ensemble l’équipement
                    adéquat.
                  </strong>
                </span>

                <span>
                  Nous vous conseillons également sur la rénovation de votre
                  salle de bain. En effet, nous proposons des services de pose
                  de carrelage. Notre zone d’intervention couvre Alger et ses
                  alentours comme : <bold>Bab-El-Oued</bold>,{" "}
                  <bold>Bouzareah</bold>, <bold>Béni Messous</bold>,
                  <bold>Ain Benian</bold>,<bold>Staoueli</bold>,{" "}
                  <bold>Chéraga</bold>, <bold>Ouled Fayet</bold>,{" "}
                  <bold>El Achour</bold>, <bold>Draria</bold>,{" "}
                  <bold>Birkhadem</bold>, <bold>Saoula</bold>,{" "}
                  <bold>Baba Hassen</bold>, <bold>Souidania</bold>...
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="section-color">
          <div className="container">
            <div className="flexy">
              <div className="section-title">
                <h3>
                  Des services de proximité adaptés à vos besoins en chauffage
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

export default chauffage;
