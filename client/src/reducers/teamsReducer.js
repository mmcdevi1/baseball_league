import actions from '../actions/teams/actions';

const { FETCH_TEAMS, NEW_TEAM, EDIT_TEAM, FETCH_TEAM } = actions;

const initialState = {
	teams: [],
	selectedTeam: {},
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_TEAMS:
			return {
				...state,
				teams: action.payload
			}
		case FETCH_TEAM:
			return {
				...state,
				selectedTeam: action.payload
			}
		case NEW_TEAM:
			return {
				...state,
				teams: [ ...state.teams, { id: state.teams.length + 1, name: action.payload.name } ]
			}
		case EDIT_TEAM:
			return {
				...state,
				teams: state.teams.map(team => {
					if (team.name === action.payload.name) {
						return {
							...team,
							name: action.payload
						}
					}

					return team;
				})
			}
		default: 
			return state;
	}
}

export default reducer;