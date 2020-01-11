import React from "react"
import rightFeatureStyles from "./rightFeature.module.css"

export default (props) => (
  <div className={rightFeatureStyles.container}>
    <div className={rightFeatureStyles.textContainer}>
      <div className={rightFeatureStyles.titleText}>{props.title}</div>
      <div className={rightFeatureStyles.contentText}>{props.content}</div>
    </div>
    <img src={props.image} className={rightFeatureStyles.featureImage}></img>
  </div>
)