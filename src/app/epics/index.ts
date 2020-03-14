import { combineEpics } from "redux-observable";
import { fetchProblemsEpic } from "./fetchProblemsEpic";
import { fetchSimilarsEpic } from "./fetchSimilarsEpic";

export const rootEpic = combineEpics(fetchProblemsEpic, fetchSimilarsEpic);
