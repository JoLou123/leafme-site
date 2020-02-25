import React from "react"
import NewsEntry from "../components/news-entry"
import newsStyles from "./news.module.css"
import Layout from "../components/layout"

import Overview from '../assets/overview_news.png'
import Light from '../assets/light_on_off.png'
import Tank from '../assets/tank.png'
import Preset from '../assets/preset_1.png'

//TODO: Add images to news entries
export default () => (
  <Layout>
    <div style={{height: 100}}></div> {/*just for extra spacing*/}

    <div className={newsStyles.titleText}>Latest News</div>

    <div className={newsStyles.timeline}>
      <NewsEntry 
        date="Feb 22, 2019"
        title="Almost Ready to Test"
        content="With the API and mobile app nearly complete, the core functionality of this project can be tested. This includes using the watering and lighting schedules created
                by the user, the electrical components work together with the Raspberry Pi in the expected manner, and the device is sturdy and can bear the weight of a plant pot. 
                Currently, the group is focusing completing the mechanical portion as quickly as possible, and completing the remaining functions of the software."
      />
      <NewsEntry 
        date="Feb 15, 2019"
        title="Software Progress at 90%"
        content="the API endpoints for lighting and watering events, and plant presets has been created. The logic that is needed to manage them have also been implemented. 
              With the core functionality of the API complete, the mobile app can also be completed. The user setup process for the device and plant settings are well under way, 
              where the user can now select a plant species from a preset list of plants and the watering and lighting schedules for that plant will be returned. 
              Sensors are working as expected now, so the data returned from the API is real data read from the sensors and the environment."
        image={Preset}
      />
      <NewsEntry 
        date="Feb 8, 2019"
        title="Time to build"
        content="Our water tank has finally leak-free, with the help of silicon sealant. The tank's walls and bottom are made of cut acrylic, while the brackets are 3D-printed. 
                This allows the tank to be light, and portable for the user. Location of the electrical components still need to be determined, but a compartment will be used to 
                protect the Raspberry Pi and sensors from the environment."
        image={Tank}
      />
      <NewsEntry 
        date="Feb 1, 2019"
        title="Software!"
        content="Software development is heavily underway, with the API endpoints for getting sensor readings is created for the dashboard of the app. The app can pull real-time
                sensor readings from the API, and a refresh button is provided to allow users to pull fresh data. The values displayed will be changed to more user friendly
                dialogue. The metrics screen also fetches real time data from the API, showing the latest six sensor readings in visual charts. "
        image={Overview}
      />
      <NewsEntry 
        date="Jan 25, 2019"
        title="It's Alive "
        content="Electrical components are coming together smoothly. We figured out the correct voltages required to turn on our water pump, as well as turn on the LED grow light. 
                The LED grow light is composed of several different coloured LEDs optimized for growing plants. It will be controlled by a relay connected to an Arduino board, which
                where the input comes from the Raspberry Pi. Similarly, the water pump is also controlled by an input provided by the Raspberry Pi, and then a motor shield. "
        image={Light}
      />      
      <NewsEntry 
        date="Jan 18, 2019"
        title="It Begins"
        content="The API endpoints for the schedules are created. Lighting and watering schedules can be created, read, and deleted. Watering and lighting events will be generated from the schedules created.
                On the mobile app, the user interface for the schedules has been created to include a calendar and list view of the created schedules
                Using the endpoints from the API, the user can create and delete watering schedules. Sensors have also been purchased and are currently in testing, 
                to ensure correct functionality. Mechanical designs are currently in progress as well."
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