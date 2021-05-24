import Head from "next/head";
import BodyBg from "../components/BodyBg";
import HeadBg from "../components/HeadBg";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Darky Plumbing - Plombier chauffagiste artisan Professionnel à alger
          </title>
          <meta
            name="description"
            content="Plombier chauffagiste Alger. Artisan agréée et spécialisée dans la plomberie, le chauffage et l'assainissement. Riche d'une expérience et de savoir-faire à votre service."
          />
          <link rel="icon" href="/darky_favicon.ico" />
          <meta
            name="keywords"
            content="plombier, chauffagiste, alger, chauffage central, artisan, spécialisée, pose sanitaire, installation, rénovation,darky-plumbing,entretien"
          />
          <meta
            property="og:title"
            content="Darky Plumbing - Plombier chauffagiste Alger."
          />
          <meta
            property="og:url"
            content="https://darky-plumbing.netlify.app"
          />
          <meta property="og:image" content="/static/images/background.jpg" />
          <meta
            property="og:description"
            content="Plombier chauffagiste Alger. Artisan agréée et spécialisée dans la plomberie, le chauffage et l'assainissement. Riche d'une expérience et de savoir-faire à votre service."
          />
        </Head>

        <HeadBg />
        <BodyBg />
      </Layout>
    </>
  );
}
