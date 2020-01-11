import React from "react"
import NewsEntry from "../components/news-entry"
import newsStyles from "./news.module.css"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{height: 100}}></div> {/*just for extra spacing*/}
    <div className={newsStyles.timeline}>
      <NewsEntry 
        date="Jan 11, 2020"
        title="Hello, World!"
        content="Website is now live!"
      />
      <NewsEntry 
        date="Jan 11, 2020"
        title="Hello, World!"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <NewsEntry 
        date="Jan 11, 2020"
        title="Hello, World!"
        content="Website is now live!"
      />
    </div>
    <div style={{height: 100}}></div> {/*just for extra spacing*/}
  </Layout>
)