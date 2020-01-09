import React from "react"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"
import logo from "../assets/logo.png"

export default () => (
  <nav className={headerStyles.navbar}>
    <div className={headerStyles.spaced}>
      <Link to="/">
        <img src={logo} width="50" height="50"></img>
      </Link>
      <div className={headerStyles.spaced}>
        <Link className={headerStyles.links} to="/features/">Features</Link>
        <Link className={headerStyles.links} to="/team/">Team</Link>
        <Link className={headerStyles.links} to="/news/">News</Link>
      </div>
    </div>
  </nav>
)