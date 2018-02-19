import React, { Component } from 'react'

export default class CoursesContainer extends Component {
	render () {
		return (
			<div className="s-wrap">
			  <ul className="MediaList MediaListAsBlocks">
			    {this.props.children}
			  </ul>
			</div>
		)
	}
}