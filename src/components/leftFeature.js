import React from "react"
import leftFeatureStyles from "./leftFeature.module.css"

export default (props) => (
  <div className={leftFeatureStyles.container}>
    <img src={props.image} className={leftFeatureStyles.featureImage}></img>
    <div className={leftFeatureStyles.textContainer}>
      <div className={leftFeatureStyles.titleText}>{props.title}</div>
      <div className={leftFeatureStyles.contentText}>{props.content}</div>
    </div>
  </div>
)