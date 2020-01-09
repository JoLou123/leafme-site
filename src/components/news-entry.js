import React from "react"
import entryStyles from "./news-entry.module.css"

export default () => (
<div className={entryStyles.beside}>
  <div class={entryStyles.container}>
      <div class={entryStyles.left}>
        <h2>2017</h2>
      </div>
    </div>
  <div className={`${entryStyles.content} ${entryStyles.right}`}>
    <h2>Title</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
  </div>
</div>
)