import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/favicon.png"
        />

        <link rel="stylesheet" href="assets/css/preloader.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/meanmenu.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/backToTop.css" />
        <link rel="stylesheet" href="assets/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="assets/css/fontAwesome5Pro.css" />
        <link rel="stylesheet" href="assets/css/elegantFont.css" />
        <link rel="stylesheet" href="assets/css/default.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      <Header />

      <div className="mx-auto">{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Data-tech PLC | cyber security",
  description:
    "Find the best security and software develpment services you can get in Ethiopia. ",
  keywords:
    "web development, cyber , cyber security, cloud ,software testing, pen test",
};
