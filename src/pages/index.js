import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <main>
        <p>I'm making this by following Gastby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/E1oMV3QVgAIr1NT.webp"
        />
      </main>
    </Layout>
  );
};

export default IndexPage;
