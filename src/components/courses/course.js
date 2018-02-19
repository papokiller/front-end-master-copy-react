import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

export default class Course extends Component {
	render () {
		return (
			<li className="MediaItem s-vflex" id="building-apps-angular">
			   <div className="s-vflex-outer">
			      <div className="s-vflex-inner">
			         <h2 className="title">
			         	<NavLink to={`/courses/${this.props.data.id}/episodes`}>{this.props.data.name}</NavLink>
			         </h2>
			         <div className="Instructor" style={{paddingLeft: 0}}>
			            
			            <div className="name">{this.props.data.name_instructor}</div>
			            <div className="bio">{this.props.data.bio_instructor}</div>
			         </div>
			         <div className="summary">{this.props.data.summary}</div>
			         <div className="meta">
			            {this.props.data.time_course}
			         </div>
			      </div>
			      <div className="cta">
			      	<NavLink to={`/courses/${this.props.data.id}/episodes`}>Watch Course</NavLink>
			      </div>
			   </div>
			   <a className="thumbnail" href="/courses/1/episodes">
			    <img style={{position: 'relative', left: '-90px'}} src="http://www.tallon4.es/wp-content/uploads/2015/01/its-free.png" className="lazyload lazyloaded"/>
			   </a>
			   <div className="progress">
			      <div className="highlight" style={{width: '0%'}}></div>
			   </div>
			</li>
		)
	}
}