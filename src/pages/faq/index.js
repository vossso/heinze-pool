import React from 'react'

import Layout from '../../components/Layout'
import FaqRoll from '../../components/FaqRoll/FaqRoll'
import Stage from '../../components/Stage/Stage'

import titleImg from '../../img/water.jpg'

export default class FaqIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Stage title="Fragen & Antworten" image={titleImg} description="Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue." />
        <section className="section">
          <div className="container">
            <div className="content">
              <FaqRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
