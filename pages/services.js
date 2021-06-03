import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { IoPhonePortrait } from "react-icons/io5";

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
              <Link href="/services/plomberie-sanitaire">
                <div id="1" className="col">
                  <div className="box-overlay"></div>

                  <a>Plomberie sanitaire</a>
                </div>
              </Link>

              <Link href="/services/chauffage-centrale">
                <div id="2" className="col">
                  <div className="box-overlay"></div>
                  <a>Chauffage centrale</a>
                </div>
              </Link>

              <Link href="/services/installation-piscine">
                <div id="3" className="col">
                  <div className="box-overlay"></div>
                  <a>installation piscine</a>
                </div>
              </Link>

              <Link href="/services/assainissement">
                <div id="4" className="col">
                  <div className="box-overlay"></div>
                  <a>Assainissement</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="section-color">
          <div className="container">
            <div className="flexy">
              <div className="section-title">
                <h3>Si vous avez un projet à réaliser, contactez-nous</h3>
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
      </div>
    </Layout>
  );
}

export default services;
