import { of } from "rxjs";
import { switchMap, filter, catchError, mergeMap } from "rxjs/operators";
import { ActionsObservable, Epic } from "redux-observable";
import { isActionOf } from "typesafe-actions";
import {
  Actions,
  fetchCustomerTagsAsyncAction,
  enqueueSnackbarAction
} from "app/actions";
import * as service from "app/services";

type Service = typeof service;

export const fetchCustomerTagsEpic: Epic = (
  actions$: ActionsObservable<Actions>,
  _,
  { customerTagService }: Service
) => {
  return actions$.pipe(
    filter(isActionOf(fetchCustomerTagsAsyncAction.request)),
    mergeMap(() =>
      customerTagService.getCustomerTags().pipe(
        switchMap(data => of(fetchCustomerTagsAsyncAction.success(data))),
        catchError(err =>
          of(
            fetchCustomerTagsAsyncAction.failure(String(err)),
            enqueueSnackbarAction({
              message: "Get customer-tags error",
              variant: "error"
            })
          )
        )
      )
    )
  );
};
