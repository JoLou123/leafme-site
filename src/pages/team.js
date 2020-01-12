import React from "react"
import Layout from "../components/layout"

import teamStyles from "./team.module.css"

import featureImage from "../assets/box-placeholder.png"

export default () => (
  <Layout>
    <div style={{height: 120}}></div> {/*just for extra spacing*/}

    <div className={teamStyles.container}>
      <div className={teamStyles.titleText}>Meet the Team!</div>
      <img src={featureImage} width='600' height='400'></img>
      <div className={teamStyles.captionText}>Caption</div>
    </div>

    <div style={{height: 120}}></div> {/*just for extra spacing*/}
  </Layout>
)