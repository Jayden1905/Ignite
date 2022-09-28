import { combineReducers } from "@reduxjs/toolkit";
import { gamesReducer } from "./gamesReducer";
import { detailReducer } from "./detailReducer";

export const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailReducer,
});
