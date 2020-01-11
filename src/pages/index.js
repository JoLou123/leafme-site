import React from "react"
import Layout from "../components/layout"
import banner from "../assets/banner.png"

import indexStyles from "./index.module.css"

export default () => (
  <Layout>
    <div className={indexStyles.container}>
      <img src={banner} style={{width: '100%'}}></img>
      <div className={indexStyles.centered}>
        <div className={indexStyles.leafMe}>LeafMe</div>
        <div className={indexStyles.blurb}>The smart indoor planter for all your indoor planting needs.</div>
      </div>
    </div>
  </Layout>
)