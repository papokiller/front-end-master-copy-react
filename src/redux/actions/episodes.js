import Episode from '../services/episode'
import Storage from '../utils/storage'
import {
	SET_EPISODES
} from './types'

export const setParts = (payload) => ({
	type: SET_EPISODES,
	payload
})

export const getEpisodes = (courseId) => async (dispatch) => {
	const partsLocal = Storage.get(`courses:${courseId}:parts`)
	if (partsLocal) { dispatch(setParts(partsLocal)) }
	try {
		const parts = await Episode.all(courseId)
		Storage.set(`courses:${courseId}:parts`, parts.data.data)
		dispatch(setParts(parts.data.data))
	} catch (error) {
		
	}
}