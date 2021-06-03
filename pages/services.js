import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

function services() {
  return (
    <Layout>
      <Head>
        <title>Darky Plumbing - Services</title>
      </Head>
      <div className="main">
        <div className="bg-hero">
          <img src="/images/cuisines.jpg" alt="bg-service-cuisines" />
          <div className="cover-bg"></div>
        </div>
        <div className="hero-text">
          <div className="section-title">
            <h1>Nos Services</h1>
          </div>

          <div className="section-slogan">
            <p>
              Nous sommes à votre écoute pour toute installation de plomberie et
              de chauffage.
            </p>
          </div>
        </div>
      </div>

      <div className="section-services">
        <div className="container">
          <div className="wraper">
            <div className="section-heading">
              <h3>Une grande offre de prestations</h3>
              <p>
                <span>
                  L’entreprise Darky-Plumbing vous accueille pour mettre à votre
                  disposition le savoir-faire dans tous types de travaux de
                  plomberie.
                </span>
                <span>
                  Réactifs et forts d’une expérience de plus de 9 ans, nous
                  intervenons aussi bien pour du dépannage d’urgence que pour
                  des prestations en installation et en rénovation. Nous
                  travaillons dans les maisons, appartements ou studios ou bien
                  entreprise <bold>en neuf comme en rénovation</bold> et
                  réalisons une
                  <bold>grande variété de travaux en plomberie.</bold> Recherche
                  de fuite, installation de robinetterie, remplacement de
                  chauffe-eau, évacuations d’eaux usées ainsi que la création de
                  salles de bains et sanitaire en général …
                </span>
                <span>
                  Pour toute demande allant du simple dépannage à de{" "}
                  <bold>grands travaux d’installation ou de rénovation</bold>,
                  n’hésitez pas à nous contacter par téléphone ou à demander un
                  devis de plomberie.
                  <br />
                  <bold>Nous réalisons vos devis gratuitement.</bold>
                </span>
              </p>
            </div>
          </div>

          <div className="section-nos-service">
            <div className="wraper">
              <div className="section-heading">
                <h3>Nos Préstations</h3>
              </div>
            </div>

            <div className="section-grid">
              <div id="1" className="col">
                <div className="box-overlay"></div>
                <Link href="/services/plomberie">
                  <a>Plomberie</a>
                </Link>
              </div>

              <div id="2" className="col">
                <div className="box-overlay"></div>
                <Link href="/services/chauffage">
                  <a>Chauffage</a>
                </Link>
              </div>

              <div id="3" className="col">
                <div className="box-overlay"></div>
                <Link href="/services/salle-de-bain">
                  <a>Salle de bain</a>
                </Link>
              </div>

              <div id="4" className="col">
                <div className="box-overlay"></div>
                <Link href="/services/chauffe-deau">
                  <a>Ballon d'eau chaude</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default services;
