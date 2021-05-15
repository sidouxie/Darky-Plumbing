import Head from "next/head";
import HeadBg from "../components/HeadBg";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Zayn Plombier - Plombier chauffagiste artisan Professionnel à alger
        </title>
        <meta
          name="description"
          content="Plombier chauffagiste Alger. Artisan agréée et spécialisée dans la plomberie, le chauffage et l'assainissement. Riche d'une expérience et de savoir-faire à votre service."
        />
        <link rel="icon" href="/zayn_favicon_48.ico" />
      </Head>

      <HeadBg />
    </Layout>
  );
}
