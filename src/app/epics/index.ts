import { combineEpics } from "redux-observable";
import { fetchCustomerTagsEpic } from "./fetchCustomerTagsEpic";
import { fetchTargetsIdEpic } from "./fetchTargetsIdEpic";

export const rootEpic = combineEpics(fetchCustomerTagsEpic, fetchTargetsIdEpic);
