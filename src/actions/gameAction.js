import axios from "axios";
import { popularGamesUrl, upcommingGamesUrl, newGamesUrl } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
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
