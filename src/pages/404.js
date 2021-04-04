import React from "react";
import Container from "../components/share/Container/Container";
import Layout from "../components/Layout";
import Link from "../components/share/Link/Link";
import starterImg from "../img/Start.jpg";

import "./404.scss";

const NotFoundPage = () => (
  <Layout>
    <Container variant={["full-height", "no-padding", "full-width"]}>
      <div className="Page-404">
        <div className="Page-404__intro">
          <img className="IndexPage__image" src={starterImg} alt="Harz Pool" />
        </div>
        <div className="Page-404__text">
          <h1>404 Error</h1>
          <p>Die Seite wurde nicht gefunden, dafür finden Sie ihren Traumpool bei uns.</p>
          <Link label="zur Startseite" link="/" />
        </div>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
