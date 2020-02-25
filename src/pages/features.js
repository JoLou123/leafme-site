import React from "react"
import Layout from "../components/layout"
import RightFeature from "../components/rightFeature"
import LeftFeature from "../components/leftFeature"

import featureStyles from "./features.module.css"

import metricsScreen from "../assets/metrics_mock.png"
import overviewScreen from "../assets/overview_mock.png"
import scheduleScreen from "../assets/schedule_mock.png"
import presetScreen from '../assets/preset_mock.png'

export default () => (
  <Layout>
    <div style={{height: 100}}></div> {/*just for extra spacing*/}
    <div className={featureStyles.titleText}>Features</div>

    <RightFeature 
      title="Live updates on your plant"
      content="See the current status of your plant's environment."
      image={overviewScreen} 
    /> {/* pic of the app homepage*/}

    <LeftFeature 
      title="Statistics over time"
      content="Track status of your plant over time in beautiful, easy-to-read charts."
      image={metricsScreen} 
    /> {/*Metrics Screen*/}

    <RightFeature 
      title="Set it and forget it"
      content="You'll never have to remember to water your plants ever again. Set up a schedule with the app and watch your plant prosper."
      image={scheduleScreen} 
    /> {/*Scheduling screen*/}

    <LeftFeature 
      title="Don't know where to start? "
      content="From leafy greens to chili peppers, we've got you covered. Choose from any of the given presets of plant settings and we'll take care of the rest."
      image={presetScreen} 
    /> {/*Set up screen*/}

    <div style={{height: 100}}></div> {/*just for extra spacing*/}
  </Layout>
)