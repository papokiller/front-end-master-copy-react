import React, {Component} from 'react'
import Application from '../layouts/application'
import Navbar from '../navbar'
import CoursesContainer from '../../components/courses/coursesContainer'
import Course from '../../components/courses/course'
import { connect } from 'react-redux'
import {
	getEpisodes
} from '../../redux/actions/episodes'
import Episode from '../../components/episodes/episode'
class Episodes extends Component {

	componentDidMount () {
		const params = this.props.match.params
		this.props.getEpisodes(params.id)
	}
	render () {

		const mapParts = (part, index) => (
			<Episode data={{...part, course_id: this.props.match.params.id}} key={index}/>
		)

		const mapEpisodes = (episode, index) => (
			<div key={index}>
				<h3 className="lessongroup">{episode.name}</h3>
				<ul className="LessonList">
					{episode.parts.map(mapParts)}
				</ul>
			</div>
		)

		return (
			<Application>
				<div className="CourseToc s-vp-lg">
					<div className="s-wrap">
						<h2>Table of Contents</h2>
						{this.props.episodes.episodes.map(mapEpisodes)}
					</div>
				</div>
			</Application>
		)
	}
}

const mapStateToProps = ({episodes}) => ({
	episodes: episodes.toJS()
})

const mapDispatchToProps = (dispatch) => ({
	getEpisodes: (courseId) => dispatch(getEpisodes(courseId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Episodes)