const initState = {
  popular: [],
  newGames: [],
  upcomming: [],
  searched: [],
  isLoading: true,
};

export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcomming: action.payload.upcomming,
        isLoading: false,
      };
    case "LOADING_GAMES":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};
