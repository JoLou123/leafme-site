import React from "react"
import Layout from "../components/layout"

import teamStyles from "./team.module.css"

import teamPhoto from "../assets/group_photo_cropped.jpg"

export default () => (
  <Layout>
    <div style={{height: 50}}></div> {/*just for extra spacing*/}

    <div className={teamStyles.container}>
      <div className={teamStyles.titleText}>Meet the Team!</div>
      <img src={teamPhoto} width='900'></img>
      <div className={teamStyles.captionText}>Left to right: Joanna Lou, Yiyang Shi, Ji Qi, Hyunmok Jeong</div>
    </div>

    <div style={{height: 120}}></div> {/*just for extra spacing*/}
  </Layout>
)