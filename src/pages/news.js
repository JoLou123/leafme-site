import React from "react"
import NewsEntry from "../components/news-entry"
import newsStyles from "./news.module.css"
import Layout from "../components/layout"

//TODO: Add images to news entries
export default () => (
  <Layout>
    <div style={{height: 100}}></div> {/*just for extra spacing*/}

    <div className={newsStyles.titleText}>Latest News</div>

    <div className={newsStyles.timeline}>
      <NewsEntry 
        date="Jan 11, 2020"
        title="Hello, World!"
        content="Website is now live!"
      />
    </div>
    <div style={{height: 100}}></div> {/*just for extra spacing*/}
  </Layout>
)