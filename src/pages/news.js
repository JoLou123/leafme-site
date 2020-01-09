import React from "react"
import NewsEntry from "../components/news-entry"
import newsStyles from "./news.module.css"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className={newsStyles.timeline}>
      <NewsEntry />
      <NewsEntry />
      <NewsEntry />
    </div>
  </Layout>
)