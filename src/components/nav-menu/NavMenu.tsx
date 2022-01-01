import React, { useState } from 'react'

import { FaHome } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import Scrollspy from 'react-scrollspy'
const NavMenu = (): JSX.Element => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      {/* Header mobile*/}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header
        className={
          click
            ? 'header-left header-menu-style-two menu-open'
            : 'header-left header-menu-style-two'
        }
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <a href="#">TK</a>
            </div>
          </div>

          <Scrollspy
            className="nav nav-menu"
            items={['home', 'about']}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a className="nav-link" href="#home" onClick={handleClick}>
                <FaHome />
                <span className="item">Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about" onClick={handleClick}>
                <FiUser />
                <span className="item">About</span>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  )
}

export default NavMenu
