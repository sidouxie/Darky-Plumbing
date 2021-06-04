import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { IoPhonePortrait } from "react-icons/io5";

function salleDebain() {
  return (
    <Layout>
      <Head>
        <title>Darky Plumbing - Services Assainissement</title>
      </Head>
      <div className="main">
        <div className="bg-hero">
          <img
            src="/images/service/assainissement-bg.jpg"
            alt="bg-service-plomberie-sanitaire"
          />
          <div className="cover-bg"></div>
        </div>
        <div className="hero-text">
          <div className="section-title">
            <h1>Assainissement</h1>
          </div>

          <div className="section-slogan">
            <p>
              Les savoir-faire, les compétences, l’expertise et la force d’un
              réseau de professionnels.
            </p>
          </div>
        </div>
      </div>

      <section className="section-assainissement">
        <div className="container">
          <div className="wraper">
            <div className="section-heading">
              <h3>Les prestations d'assainissement'</h3>

              <p>
                <span>
                  Les travaux de plomberie et d’assainissement sont des postes
                  souvent perçus comme complexes, à l’instar de l’électricité.
                  Cette crainte est à juste titre, dans la mesure où il est
                  déconseillé de s’aventurer à l’aveugle parmi les canalisations
                  qui parcourent la maison. Néanmoins, les tâches d’entretien
                  nécessaires aux équipements de plomberie et à
                  l’assainissement, ainsi que les réparations basiques en cas de
                  fuite sont facilement maîtrisables par tout un chacun,
                  bricoleur ou non, amateur, pro ou parfait débutant.
                </span>

                <span>
                  Pour mieux vous accompagner dans le quotidien de votre
                  habitation, nos experts vous apportent leurs conseils en
                  matière de plomberie et d’assainissement. En effet, que vous
                  soyez propriétaire ou locataire, vous pouvez être confronté
                  tôt ou tard à des problématiques de cet ordre ou à la
                  nécessité d’actions d’entretien dans les règles de l’art.
                </span>

                <span>
                  <strong>laissez-vous guider par nos experts</strong>
                </span>

                <span>
                  La plomberie d’un logement nécessite un entretien régulier.
                  Néanmoins, toutes les recettes maison et les astuces qui
                  fourmillent sur internet ne sont pas bonnes à suivre. Il est
                  recommandé de suivre les conseils de professionnels pour
                  veiller à bien entretenir vos canalisations. Au travers de nos
                  dossiers, nous vous guidons vers les méthodes et produits,
                  chimiques ou naturels, qui conviennent à votre installation
                  afin d’éviter toute mauvaise surprise.
                </span>

                <span>
                  Une fuite est toujours possible. Si vous ne disposez pas des
                  compétences nécessaires à la réparation de fuites importantes,
                  nos spécialistes vous conseillent et vous indiquent les
                  premiers gestes indispensables pour éviter tout dégât.
                </span>

                <span>
                  Parce que nous pouvons tous nous sentir démunis face à un
                  sinistre dans le domaine de la plomberie, nous vous
                  accompagnons pas à pas pour minimiser les impacts de la fuite
                  et pour préparer le terrain en vue de l’intervention d’un
                  professionnel. Quant aux plus téméraires, découvrez nos
                  tutoriels pour apprendre à réparer les fuites les plus simples
                  avec succès.
                </span>
              </p>
            </div>

            <div className="img-wrap">
              <img
                src="/images/service/assainissement.jpg"
                alt="nos concept image"
              />
            </div>

            <div className="section-heading">
              <h3>Assainissement individuel et collectif</h3>

              <p>
                <span>
                  Si la plupart des logements sont raccordés au tout-à-l’égout,
                  c’est-à-dire au réseau collectif, de nombreuses habitations
                  sont encore dotées d’un dispositif d’assainissement
                  individuel. Les maisons neuves n’en sont pas exemptées,
                  puisque les constructions sur terrains isolés sont bien
                  souvent équipées de ce type d’installation.
                </span>

                <span>
                  Parce que l’assainissement est un monde à part, nous vous
                  enseignons les bons gestes pour entretenir votre installation
                  avec efficacité et sécurité. Découvrez également les
                  techniques adaptées pour intervenir correctement en cas de
                  problème.
                </span>

                <span>
                  Nos pros du bricolage vous présentent les différents
                  dispositifs actuellement implantés, qui diffèrent de la
                  traditionnelle fosse septique. Grâce à nos dossiers complets,
                  ces solutions moins contraignantes qu’elles n’en ont l’air
                  n’auront plus de secrets pour vous !
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
                  Des services de proximité adaptés à vos besoins en
                  assainissement
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

export default salleDebain;
