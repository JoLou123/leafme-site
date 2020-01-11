import React from "react"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"
import logo from "../assets/logo.png"

export default () => (
  <nav className={headerStyles.navbar}>
    <div className={headerStyles.spaced}>
      <div className={headerStyles.logoWrapper}>
        <Link to="/">
          <img src={logo} width="55" height="55"></img>
        </Link>
        <Link className={headerStyles.logo} to="/">
          LeafMe
        </Link>
      </div>
      <div className={headerStyles.spaced}>
        <Link className={headerStyles.links} to="/features/">Features</Link>
        <Link className={headerStyles.links} to="/team/">Team</Link>
        <Link className={headerStyles.links} to="/news/">News</Link>
      </div>
    </div>
  </nav>
)