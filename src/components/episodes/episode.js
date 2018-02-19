import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({data}) => (
	<li className="LessonListItem">
	  <NavLink to={`/courses/${data.course_id}/episodes/${data.id}`}>
	    <div className="thumbnail">
	      <img src={data.image} alt="Course Introduction" className="lazyload lazyloaded"/>
	    </div>

	    <div className="heading">
	      <div className="timestamp">{data.time}</div>
	      <h3>{data.name}</h3>
	    </div>

	    <div className="summary">{data.description}</div>
	  </NavLink>
	</li>
)

