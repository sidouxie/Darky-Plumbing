import Head from "next/head";
import BodyBg from "../components/BodyBg";
import HeadBg from "../components/HeadBg";
import Layout from "../components/Layout";

export default function Home() {
  return (
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
      </Head>

      <HeadBg />
      <BodyBg />
    </Layout>
  );
}
