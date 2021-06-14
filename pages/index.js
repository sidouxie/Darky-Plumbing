import React from "react";
import Head from "next/head";
import BodyBg from "../components/BodyBg";
import HeadBg from "../components/HeadBg";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Darky Plumbing - Plombier chauffagiste Professionnel à alger
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="Plombier chauffagiste Alger. Artisan agréée et spécialisée dans la plomberie, le chauffage et l'assainissement. Riche d'une expérience et de savoir-faire à votre service."
        />

        <meta
          name="keywords"
          content="plombier, chauffagiste, alger, chauffage central, artisan, spécialisée, pose sanitaire, installation, rénovation,darky-plumbing,entretien"
        />
        <meta
          property="og:title"
          content="Darky Plumbing - Plombier chauffagiste Alger."
        />
        <meta property="og:url" content="https://darky-plumbing.ml" />
        <meta property="og:image" content="/images/screenshoot_bg.jpg" />
        <meta
          property="og:description"
          content="Plombier chauffagiste Alger. Artisan agréée et spécialisée dans la plomberie, le chauffage et l'assainissement. Riche d'une expérience et de savoir-faire à votre service."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darky-plumbing" />
        <meta
          name="twitter:title"
          content="Darky Plumbing - Plombier chauffagiste Alger."
        />
        <meta
          name="twitter:description"
          content="Plombier chauffagiste Alger. Artisan agréée et spécialisée dans la plomberie, le chauffage et l'assainissement. Riche d'une expérience et de savoir-faire à votre service."
        />
        <meta name="twitter:image" content="/images/screenshoot_bg.jpg" />
      </Head>

      <HeadBg />
      <BodyBg />
    </Layout>
  );
}
