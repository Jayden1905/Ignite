import axios from "axios";
import {
  popularGamesUrl,
  upcommingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
  dispatch({
    type: "LOADING_GAMES",
  });

  // Fetch Axios
  const popularData = await axios.get(popularGamesUrl());
  const newgamesData = await axios.get(newGamesUrl());
  const upcommingData = await axios.get(upcommingGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newgamesData.data.results,
      upcomming: upcommingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
