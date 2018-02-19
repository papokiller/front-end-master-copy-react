import React, {Component} from 'react'

export default class Header extends Component {
  render () {
    return (
      <div>
        <header className="HeaderMain">
          <div className="inner">
            <div className="s-wrap">
              <h1 className="FmLogo"><a className="s-tr" href="/">FrontendMasters</a></h1>
              <label className="NavMobileHamburger" for="open-nav-main">Menu</label>
              <nav className="Nav NavMobile NavMain">
                <input className="toggle-target" id="open-nav-main" type="checkbox"/>
                <ul>
                  <li className="item active">
                    <a href="/">Courses</a>
                  </li>
                  <li className="item">
                    <a href="/">By (PapoKiller)</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <svg class="diagonal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#c02d28"></stop>
                <stop offset="100%" stop-color="#e66225"></stop>
              </linearGradient>
            </defs>
            <polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon>
          </svg>
        </header>
        <div id="after-header"></div>
      </div>
    )
  }
}