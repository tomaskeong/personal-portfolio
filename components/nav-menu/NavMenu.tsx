import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Scrollspy from "react-scrollspy"
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing,
} from "react-icons/fi"
import { FaHome, FaBlog } from "react-icons/fa"
const NavMenu = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const Tooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
  })

  return (
    <>
      {/* Header mobile*/}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left menu-open" : "header-left "}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <a href="#">TK</a>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={["home", "about", "resume", "work", "blog", "contactus"]}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a
                className="nav-link"
                href="#home"
                data-tip
                data-for="HOME"
                onClick={handleClick}
              >
                <FaHome />
                <Tooltip id="HOME">
                  <span>Home</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                data-tip
                data-for="ABOUT"
                onClick={handleClick}
              >
                <FiUser />
                <Tooltip id="ABOUT">
                  <span>About</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#resume"
                data-tip
                data-for="RESUME"
                onClick={handleClick}
              >
                <FiFileText />
                <Tooltip id="RESUME">
                  <span>Resume</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#work"
                data-tip
                data-for="WORK"
                onClick={handleClick}
              >
                <FiBriefcase />
                <Tooltip id="WORK">
                  <span>Work</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#blog"
                data-tip
                data-for="BLOG"
                onClick={handleClick}
              >
                <FaBlog />
                <Tooltip id="BLOG">
                  <span>Blog</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#contactus"
                data-tip
                data-for="CONTACT"
                onClick={handleClick}
              >
                <FiPhoneOutgoing />
                <Tooltip id="CONTACT">
                  <span>Contact</span>
                </Tooltip>
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
