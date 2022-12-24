import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/current-projects" className="navigation-links-navlink">
        {props.text}
      </Link>
      <a
        href="https://github.com/Emr3Studios/Downloads"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text1}
      </a>
      <Link to="/about-us" className="navigation-links-navlink1">
        {props.text3}
      </Link>
      <a
        href="https://discord.gg/bFQ5559nBG"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1"
      >
        {props.text4}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Our Discord',
  rootClassName: '',
  text: 'Current Projects',
  text3: 'About Us',
  text1: 'Downloads',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
