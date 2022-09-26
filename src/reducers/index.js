import { combineReducers } from "@reduxjs/toolkit";
import { gamesReducer } from "./gamesReducer";

export const rootReducer = combineReducers({
  games: gamesReducer,
});
