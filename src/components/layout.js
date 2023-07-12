/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react"
import Header from "./header"
import "./layout.css"
import { Link } from "gatsby"

const Layout = ({ children, title, description }) => {
  const [currentUrl, setCurrentUrl] = useState("")

  const list = [
    "https://doodleipsum.com/700x933/hand-drawn?i=53f5643e46456031345f79c152ccef6e",
    "https://doodleipsum.com/700x933/hand-drawn?i=de92b6ea7561674a3aa00d9a41c9a949",
    "https://doodleipsum.com/700x933/hand-drawn?i=91f7a6c433fd73c95da86b8ffb8b7b02",
    "https://doodleipsum.com/700x933/hand-drawn?i=ad595cac8c64fbb7496fc88387600f34",
    "https://doodleipsum.com/700x933/hand-drawn?i=74992813671e428c3a0dc015673e1899",
    "https://doodleipsum.com/700x933/hand-drawn?i=9c37058c2004428c0750ca785651d037",
    "https://doodleipsum.com/700x933/hand-drawn?i=67089ae7e4f6418caa5efa7a204be6a6",
  ]

  useEffect(() => {
    console.log(window.location.pathname)
    setCurrentUrl(window.location.pathname)
  }, [])

  const fashionClass =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white"
  const normalClass =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-300 text-white"

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
          <a className="flex justify-center items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl cursor-pointer">
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                }}
              >
                Nexus Tailwind UI
              </Link>
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <a target={"_blank"} href="https://github.com/o-x-y-g-e-n/nexus-tailwind-ui">
            <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
              >
                <title>Github</title>
                <desc>A solid styled icon from Orion Icon Library.</desc>
                <path
                  data-name="layer2"
                  d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
                  fill="#202020"
                ></path>
                <path
                  data-name="layer1"
                  d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
                  fill="#202020"
                ></path>
              </svg>
              GitHub
            </button>
          </a>
        </div>
      </header>
      <section className="text-gray-600 body-font z-index-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
              {title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {description}
            </p>
          </div>
        </div>
        <img
          className="absolute -top-0 left-1/2 -translate-x-1/2 opacity-50 blur-md z-index-0"
          style={{ height: "700px" }}
          src={list[Math.floor(Math.random() * list.length)]}
        />
      </section>
      <div
        className="flex items-center mb-16 ml-16 space-x-4"
        style={{ width: "100%" }}
      >
        <span className={currentUrl == "/" ? fashionClass : normalClass}>
          <Link style={{ textDecorationColor: "none" }} to="/">
            Cards
          </Link>
        </span>
        <span className={currentUrl == "/alerts/" ? fashionClass : normalClass}>
          <Link style={{ textDecorationColor: "none" }} to="/alerts">
            Alerts
          </Link>
        </span>
        <span
          className={currentUrl == "/widgets/" ? fashionClass : normalClass}
        >
          <Link style={{ textDecorationColor: "none" }} to="/widgets">
            Widgets
          </Link>
        </span>
        <span className={currentUrl == "/tables/" ? fashionClass : normalClass}>
          <Link style={{ textDecorationColor: "none" }} to="/tables">
            Tables
          </Link>
        </span>
      </div>

      <div>
        <main>{children}</main>
      </div>
      <footer className="bg-gray-100">
        <div className="relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <span className="text-xl cursor-pointer">
                <Link
                  to="/"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Nexus Tailwind UI
                </Link>
              </span>

              <p className="mx-auto mt-6 text-center leading-relaxed text-gray-500 lg:text-left">
                Comprehensive and innovative collection of Tailwind CSS
                components and utilities. Designed to enhance your web
                development workflow, our library offers a wide range of
                pre-built elements.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  to="/widgets"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Talwind Widgets
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Product Cards
                </Link>
              </li>

              <li>
                <Link
                  to="/alerts"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Alert Components
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            MIT License &copy; 2023
          </p>
        </div>
      </footer>
    </>
  )
}

export default Layout
