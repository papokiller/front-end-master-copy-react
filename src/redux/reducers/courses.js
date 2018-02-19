import { fromJS } from 'immutable'
import {
	SET_COURSES
} from '../actions/types.js'

const initialState = fromJS({
	courses: [],
})

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_COURSES:
			return state.merge({courses: action.payload})
		default:
			return state
	}
}