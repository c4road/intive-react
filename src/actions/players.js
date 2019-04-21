import agent from '../agent'


export function playersHasErroed(bool, error){
	return {
		type: 'PLAYERS_HAS_ERROED',
		hasErroed: bool,
		error
	}
}

export function playersAreLoading(bool){
	return {
		type: 'PLAYERS_ARE_LOADING',
		loading: bool
	}
}

export function playersFetchDataSuccess(players){
	return {
		type: 'PLAYERS_FETCH_DATA_SUCCESS',
		players 
	};
}

export function updatePlayersSearch(searchParameters){

	return {
	  type: "UPDATE_PLAYER_SEARCH",
	  data: searchParameters
	}
}

export function playersFetchData(payload){

	return (dispatch) => {
		dispatch(playersAreLoading(true));

		payload.then(
			res =>{
				dispatch(playersFetchDataSuccess(res))
				dispatch(playersAreLoading(false));
			},
			error =>{
				dispatch(playersHasErroed(true, error.response.body))
			}
		)			

	};
}

export function playersSearchFilter(searchResults){


	return {
		type: 'UPDATE_PLAYER_SEARCH',
		data:searchResults
	}
	
}