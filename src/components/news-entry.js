import React from "react"
import entryStyles from "./news-entry.module.css"

export default (props) => (
<div className={entryStyles.beside}>
  <div class={entryStyles.container}>
      <div class={entryStyles.left}>
        <div className={entryStyles.dateText}>{props.date}</div>
      </div>
    </div>
  <div className={`${entryStyles.content} ${entryStyles.right}`}>
    <div className={entryStyles.titleText}>{props.title}</div>
    <p>{props.content}</p>
  </div>
</div>
)