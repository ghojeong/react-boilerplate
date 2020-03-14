import { createAction, createAsyncAction, ActionType } from "typesafe-actions";
import { CustomerTagModel } from "app/models";

export const fetchCustomerTagsAsyncAction = createAsyncAction(
  "FETCH_CUSTOMER_TAGS_REQUEST",
  "FETCH_CUSTOMER_TAGS_SUCCESS",
  "FETCH_CUSTOMER_TAGS_FAILURE"
)<undefined, CustomerTagModel[], string>();

export const clickCustomerTagAction = createAction("CLICK_CUSTOMER_TAG")<{
  id: string;
}>();

export type CustomerTagActions =
  | ActionType<typeof fetchCustomerTagsAsyncAction>
  | ActionType<typeof clickCustomerTagAction>;
