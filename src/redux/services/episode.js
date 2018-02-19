import client from './client'
import { server } from '../config'
export default {
	all: (courseId) => client.get(`${server}/api/v1/courses/${courseId}/episodes?per_page=100`)
}