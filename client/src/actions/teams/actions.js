import axios from 'axios';

const actions = {
	FETCH_TEAMS: 'FETCH_TEAMS',
	FETCH_TEAM:  'FETCH_TEAM',
	NEW_TEAM:    'NEW_TEAM',
	EDIT_TEAM:   'EDIT_TEAM',

	fetchTeams: () => {
		return dispatch => {
			axios
				.get('/api/teams')
				.then(res => {
					dispatch({
						type: actions.FETCH_TEAMS,
						payload: res.data
					})
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	fetchTeam: (id) => {
		return dispatch => {
			axios
				.get(`/api/teams/${id}`)
				.then(res => {
					dispatch({
						type: actions.FETCH_TEAM,
						payload: res.data
					})
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	newTeam: (team, history) => {
		return dispatch => {
			axios
				.post('/api/teams', team)
				.then(res => {
					dispatch({
						type: actions.NEW_TEAM,
						payload: res.data
					})
					history.push('/teams')
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	editTeam: (id, team, history) => {
		return dispatch => {
			axios
				.put(`/api/teams/${id}`, team)
				.then(res => {
					dispatch({
						type: actions.EDIT_TEAM,
						payload: res.data
					})
					history.push('/teams')
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

}

export default actions;