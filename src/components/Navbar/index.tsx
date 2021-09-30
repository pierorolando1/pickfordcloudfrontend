import React from 'react'
import {
    Link,
    useLocation,
    useHistory
}
from 'react-router-dom'
import { ChangeLenguage } from '../ChangeLeng'

export const Navbar = () => {
    const location = useLocation();
    const history = useHistory()

    return (
        <nav className="h-16 w-full fixed">
        <div className="max-w-7xl mx-auto h-14 flex items-center justify-between">
          {/* text-gray-300 font-bold mx-4 */}
          <button className="text-gray-200 font-bold mx-4" onClick={() => history.goBack()}>
          {
            location.pathname !== "/" ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
              :
              ''
          }
          </button>
          {/* <Link to="/" className=""></Link> */}
          <div className="flex items-center">
            <ChangeLenguage />
            <a href="https://github.com/pierorolando1" target="_blank" rel="noreferrer" className="ml-2">
              <img src="https://cdn.svgporn.com/logos/github-icon.svg" className="h-5 w-5 filter invert" alt="" />
            </a>
          </div>
        </div>
      </nav>
    )
}
