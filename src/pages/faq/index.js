import React from "react";

import Layout from "../../components/Layout";
import FaqRoll from "../../components/FaqRoll/FaqRoll";
import Stage from "../../components/Stage/Stage";

import titleImg from "../../img/FAQ_stage.jpg";
import Container from "../../components/share/Container/Container";
import "./FaqPage.scss";

export default class FaqIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="FaqPage">
          <Stage
            title="Häufig gestellte Fragen"
            image={titleImg}
            isStarter={false}
          />
          <Container>
            <div className="content">
              <FaqRoll />
            </div>
          </Container>
        </section>
      </Layout>
    );
  }
}
