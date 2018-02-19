import React, {Component} from 'react'

export default class Navbar extends Component {
  render () {
    return (
      <section className="s-vp-xl">
        <header className="s-wrap CourseHeader">
          <h1>Frontend Masters Courses</h1>
        </header>
        <div className="LearningPaths">
          <div className="s-wrap">
            <label className="NavMobileToggle Button ButtonSmall ButtonGray" for="open-courses-nav">Filter...</label>
            <nav className="Nav NavMobile">
              <ul>
                <li className="active"><a href="/">All Courses</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    )
  }
}