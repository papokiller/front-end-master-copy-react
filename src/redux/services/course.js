import client from './client'
import { server } from '../config'
export default {
	all: () => client.get(`${server}/api/v1/courses`)
}