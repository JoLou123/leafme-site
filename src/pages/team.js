import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import teamStyles from "./team.module.css"

export default () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "group_photo.jpg"}, childImageSharp: {fluid: {aspectRatio: {}}}) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          presentationWidth
        }
      }
    }
  }
  
  `)

  return (
    <Layout>
      <div style={{height: 50}}></div> {/*just for extra spacing*/}

      <div className={teamStyles.container}>
        <div className={teamStyles.titleText}>Meet the Team!</div>
        <Img fluid={data.file.childImageSharp.fluid} alt="team photo" className={teamStyles.teamPhoto}/>
        <div className={teamStyles.captionText}>Left to right: Joanna Lou, Yiyang Shi, Ji Qi, Hyunmok Jeong</div>
      </div>

      <div style={{height: 120}}></div> {/*just for extra spacing*/}
    </Layout>
  )
}

