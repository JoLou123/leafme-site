import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import RightFeature from "../components/rightFeature"

import banner from "../assets/banner.png"
import device from "../assets/device.jpg"
import splashScreen from "../assets/splash_mock.png"

import indexStyles from "./index.module.css"

export default () => (
  <Layout>
    <div className={indexStyles.container}>
      <img src={banner} style={{width: '100%'}}></img>
      <div className={indexStyles.centered}>
        <div className={indexStyles.leafMe}>LeafMe</div>
        <div className={indexStyles.blurb}>You can just "leaf" me there.</div>
      </div>
    </div>

    <div style={{height: 100}}></div> {/*just for extra spacing after banner*/}

    <div className={indexStyles.video}>
      <div className={indexStyles.titleText}>Check out our project here!</div>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube-nocookie.com/embed/3CllZJxUAPc" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>

    <div style={{height: 100}}></div> {/*more extra spacing*/}

    <RightFeature 
      title="Take care of your plants, wherever you are"
      content="With the LeafMe app, monitor and water your plant whether you're at work, on vacation, or just don't want to get out of bed."
      image={splashScreen} 
    /> {/*gif of the app or pic of the splash screen*/}

    <RightFeature 
      title="Simple, portable and BYOP"
      content="Bring your own plant! No need to buy special plant pods. Follow the set up instructions on the app and you're good to go!"
      image={device} 
    /> {/*pic or 3D model of the device*/}

    <Link className={indexStyles.learnMore} to="/features/">Learn More</Link>

  </Layout>
)