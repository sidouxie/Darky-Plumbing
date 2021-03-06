import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" sizes="64x64" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

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

          {/* <!-- Google Analytics --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
              ga('create', 'UA-136464905-6', 'auto');
              ga('send', 'pageview');`,
            }}
          />

          {/* <!-- End Google Analytics --> */}

          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KVRBXPP');`,
            }}
          />
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVRBXPP"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
