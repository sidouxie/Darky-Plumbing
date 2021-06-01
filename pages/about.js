import React from "react";
import Layout from "../components/Layout";

function about() {
  return (
    <Layout>
      <div className="main">
        <div className="bg-hero">
          <img src="/images/a_propos.jpg" alt="bg-a-propos" />
          <div className="cover-bg"></div>
        </div>
        <div className="hero-text">
          <div className="section-title">
            <h1>Qui sommes-nous ?</h1>
          </div>

          <div className="section-slogan">
            <p>
              Les savoir-faire, les compétences, l’expertise et la force d’un
              réseau de professionnels.
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="section-text">
          <div className="container">
            <hr></hr>
            <div className="wraper-content">
              <div className="column">
                <div className="section-heading">
                  <h3>Notre concept</h3>

                  <p>
                    <span>
                      Darky-plumbing.com est une entreprise de service dans le
                      secteur du dépannage et des petits travaux s’appuyant sur
                      un réseau national de professionnels qualifiés . Tous les
                      métiers y sont représentés, de la plomberie à la peinture,
                      de l’électricité générale à la climatisation, de la
                      sécurisation des biens à l’installation d’une nouvelle
                      chaudière par exemple.
                    </span>
                    <span>
                      Darky-plumbing.com n’est pas une plateforme, ses services
                      vont, largement, au delà de la simple mise en relation
                      avec un professionnel ou un artisan. Les compétences et
                      les niveaux d’expertise nécessaires des membres de son
                      réseau sont garantis. Le respect du devis et la bonne fin
                      des travaux sont assurés. Darky-plumbing.com vous
                      accompagne tout au long de votre commande, du premier
                      contact par téléphone, ou via son site internet, à la
                      réception des travaux. Nous démontrons, tous
                    </span>
                    <span>
                      les jours, que la rapidité de prise en compte de votre
                      demande peut aller de pair avec la qualité des prestations
                      attendues.
                    </span>
                  </p>
                </div>
                <div className="img-wrap">
                  <img src="/images/nos_concepte.jpg" alt="nos concept image" />
                </div>
              </div>

              <div className="column">
                <div className="section-heading">
                  <h3>Nos valeurs</h3>

                  <p>
                    <span>
                      C’est la volonté de revenir à des valeurs simples, celles
                      qui habitaient et guident encore nombre d’artisans, qui a
                      précédé à la naissance du réseau. Confronté à une
                      concurrence de plus en plus déloyale de la part
                      d’individus ou d’entreprises se disant « professionnels »,
                      le tout relayé par des plateformes motivées uniquement par
                      l’appât du gain, il était temps de remettre le client et
                      les « vrais » professionnels au centre d’un dispositif
                      garantissant l’exécution dans les règles de l’art des
                      travaux commandités et cela au meilleur prix.
                    </span>
                    <span>
                      L’intégrité, la rigueur et la transparence sont les trois
                      valeurs auxquelles doivent aussi adhérer nos partenaires
                      professionnels et artisans.
                    </span>
                    <span>
                      Ils doivent y souscrire s’ils veulent participer au réseau
                      et donc à ce désir de changer, profondément, l’image de «
                      nos » métiers et de certaines pratiques.
                    </span>
                  </p>
                </div>
                <div className="img-wrap">
                  <img src="/images/nos_valeurs.jpg" alt="nos valeurs image" />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="section-heading">
              <h3>Nos atouts</h3>
            </div>
            <div className="wraper">
              <div className="col">
                <div className="strength-icon">
                  <div className="img-wrap">
                    <img
                      src="/images/icones/accompagnement.svg"
                      alt="icone accompagnement"
                    />
                  </div>
                  <strong>Un accompagnement sur mesure</strong>
                  <p>
                    Un chargé d’affaire est dédié à chaque client ; vous avez
                    donc un interlocuteur unique. Un diagnostic précis de votre
                    problème et de sa solution est expliqué par un de nos
                    opérateurs. Un contrôle qualité est réalisé après chaque
                    intervention.
                  </p>
                </div>

                <div className="strength-icon">
                  <div className="img-wrap">
                    <img src="/images/icones/tarif.svg" alt="icone tarif" />
                  </div>
                  <strong>Une tarification claire</strong>
                  <p>
                    Tous nos prix sont clairement annoncés et toutes nos
                    interventions sont réalisées avec l’acceptation préalable
                    d’un devis.
                  </p>
                </div>

                <div className="strength-icon">
                  <div className="img-wrap">
                    <img
                      src="/images/icones/garantie.svg"
                      alt="icone garantie"
                    />
                  </div>
                  <strong>Nos garanties</strong>
                  <p>
                    Toutes nos interventions sont couvertes par nos assurances
                    responsabilité civile et décennale. Notre service
                    après-vente est disponible à tout moment par mail et/ou par
                    téléphone (09h00 – 18h00).
                  </p>
                </div>

                <div className="strength-icon">
                  <div className="img-wrap">
                    <img
                      src="/images/icones/communication.svg"
                      alt="icone communication"
                    />
                  </div>
                  <strong>Une communication efficace</strong>
                  <p>
                    Notre service client est disponible de 07h00 à 20h00 tous
                    les jours du Lundi au Vendredi. Nous assurons également une
                    permanence 24h/24h par mail ou par le biais de notre tchat
                    en ligne en cas d’urgence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default about;
