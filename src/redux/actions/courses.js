import Course from '../services/course'
import Storage from '../utils/storage'
import {
	SET_COURSES
} from './types'

export const setCourses = (payload) => ({
	type: SET_COURSES,
	payload
})

export const getCourses = () => async (dispatch) => {
	const coursesLocal = Storage.get('courses')
	if (coursesLocal) { dispatch(setCourses(coursesLocal)) }
	try {
		const courses = await Course.all()
		Storage.set('courses', courses.data.data)
		dispatch(setCourses(courses.data.data))
	} catch (error) {
		
	}
}