import { fromJS } from 'immutable'
import {
	SET_EPISODES
} from '../actions/types.js'

const initialState = fromJS({
	episodes: [],
})

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_EPISODES:
			return state.merge({episodes: action.payload})
		default:
			return state
	}
}