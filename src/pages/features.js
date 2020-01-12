import React from "react"
import Layout from "../components/layout"
import RightFeature from "../components/rightFeature"

import featureImage from "../assets/box-placeholder.png"

export default () => (
  <Layout>
    <RightFeature 
      title="Take care of your plants, wherever you are"
      content="With the LeafMe app, monitor and water your plant whether you're at work, on vacation, or just don't want to get out of bed."
      image={featureImage} 
    /> {/* pic of the app homepage*/}

    <RightFeature 
      title="Simple, portable and BYOP"
      content="Bring your own plant! No need to buy special plant pods. Follow the set up instructions on the app and you're good to go!"
      image={featureImage} 
    /> {/*pic or 3D model of the device*/}
  </Layout>
)