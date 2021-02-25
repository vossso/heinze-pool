import React from "react";

import Layout from "../../components/Layout";
import FaqRoll from "../../components/FaqRoll/FaqRoll";
import Stage from "../../components/Stage/Stage";

import titleImg from "../../img/water.jpg";
import Container from "../../components/share/Container/Container";
import "./FaqPage.scss";

export default class FaqIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="FaqPage">
        <Stage
          title="Fragen & Antworten"
          image={titleImg}
          description="Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."
        />
        <Container>
          <h3>Häufig gestellte Fragen</h3>
          <div className="content">
            <FaqRoll />
          </div>
        </Container>
        </section>
      </Layout>
    );
  }
}
