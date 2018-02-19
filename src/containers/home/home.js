import React, {Component} from 'react'
import Application from '../layouts/application'
import Navbar from '../navbar'
import CoursesContainer from '../../components/courses/coursesContainer'
import Course from '../../components/courses/course'
import { connect } from 'react-redux'
import {
	getCourses
} from '../../redux/actions/courses'

class Home extends Component {
	
	componentDidMount () {
		this.props.getCourses()
	}

	render () {
		return (
			<Application>
				<Navbar/>
				<CoursesContainer>
					{this.props.courses.courses.map((course, index) => (<Course data={course} key={index} />))}
				</CoursesContainer>
			</Application>
		)
	}
}

const mapStateToProps = ({courses}) => ({
	courses: courses.toJS()
})

const mapDispatchToProps = (dispatch) => ({
	getCourses: () => dispatch(getCourses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)