import React, {Component} from 'react'
import Application from '../layouts/application'
import Navbar from '../navbar'
import CoursesContainer from '../../components/courses/coursesContainer'
import Course from '../../components/courses/course'
import { connect } from 'react-redux'
import {
	getEpisodes
} from '../../redux/actions/episodes'

class Part extends Component {

	state = {
		foundPart: false,
		partLink: null
	}

	componentDidMount () {
		const params = this.props.match.params
		console.log(params)
		this.props.getEpisodes(params.id)
	}
	
	componentWillReceiveProps (nextProps) {
		//this.props.getCourses()
		console.log('next props: ')
		console.log(nextProps)
		if (!this.state.foundPart) {
			this.props.episodes.episodes
			.forEach((episode) => episode.parts.forEach((part) => part.id == this.props.match.params.episode_id ? this.setState({partLink: part.video_url, foundPart: true}) : null  ) )
		}
	}

	render () {
		return (
			<Application>
				<br />
				<br />
				<br />
				<br />
				<center>


					{this.state.partLink && (
						<div>
							<video style={{display: 'block', width: '50vw'}} controls autoplay>
			  				<source src={this.state.partLink} type="video/mp4"/>
							</video>
							<br />
							<br />
							<br />
							<br />
							<a href="https://github.com/papokiller">
								<h1>this code is developed in react and ruby on rails sucks if you want to refactor press click here </h1>
 							</a>
						</div>

					)}
				</center>
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

export default connect(mapStateToProps, mapDispatchToProps)(Part)