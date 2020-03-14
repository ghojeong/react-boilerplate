import { getType } from "typesafe-actions";
import {
  Actions,
  resetAction,
  fetchCustomerTagsAsyncAction,
  clickCustomerTagAction
} from "app/actions";
import { CustomerTagModel } from "app/models";

export interface CustomerTagsState {
  isLoading: boolean;
  errMsg: string;
  items: CustomerTagModel[];
  checkedItems: Record<CustomerTagModel["id"], boolean>;
}

const customerTagsInitialState: CustomerTagsState = {
  isLoading: false,
  errMsg: "",
  items: [],
  checkedItems: {}
};
export const customerTagsReducer = (
  customerTagsState = customerTagsInitialState,
  action: Actions
): CustomerTagsState => {
  switch (action.type) {
    case getType(resetAction):
      return customerTagsInitialState;
    case getType(fetchCustomerTagsAsyncAction.request):
      return {
        ...customerTagsState,
        isLoading: true,
        errMsg: ""
      };
    case getType(fetchCustomerTagsAsyncAction.success):
      return {
        ...customerTagsState,
        isLoading: false,
        errMsg: "",
        items: action.payload
      };
    case getType(fetchCustomerTagsAsyncAction.failure):
      return {
        ...customerTagsState,
        isLoading: false,
        errMsg: action.payload
      };
    case getType(clickCustomerTagAction):
      return {
        ...customerTagsState,
        checkedItems: {
          ...customerTagsState.checkedItems,
          [action.payload.id]: !customerTagsState.checkedItems[
            action.payload.id
          ]
        }
      };
    default:
      return customerTagsState;
  }
};
