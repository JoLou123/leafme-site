import React from "react"
import entryStyles from "./news-entry.module.css"


export default (props) => {
  let right;

  if(props.image) {
    right = (
      <div className={entryStyles.withImage}>
        <div className={entryStyles.contentText}>{props.content}</div>
        <img src={props.image} className={entryStyles.newsImage}></img>
      </div>
    )
  } else {
    right = (
        <div className={entryStyles.contentText}>{props.content}</div>
    )
  }

  return (
    <div className={entryStyles.beside}>
      <div class={entryStyles.container}>
          <div class={entryStyles.left}>
            <div className={entryStyles.dateText}>{props.date}</div>
          </div>
        </div>
      <div className={`${entryStyles.content} ${entryStyles.right}`}>
        <div className={entryStyles.titleText}>{props.title}</div>
        {right}
      </div>
    </div>
    )
}