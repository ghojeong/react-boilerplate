import { of } from "rxjs";
import { switchMap, filter, catchError, mergeMap } from "rxjs/operators";
import { ActionsObservable, Epic } from "redux-observable";
import { isActionOf } from "typesafe-actions";
import {
  Actions,
  fetchSimilarsAsyncAction,
  enqueueSnackbarAction
} from "app/actions";
import * as service from "app/services";

type Service = typeof service;

export const fetchSimilarsEpic: Epic = (
  actions$: ActionsObservable<Actions>,
  _,
  { similarService }: Service
) => {
  return actions$.pipe(
    filter(isActionOf(fetchSimilarsAsyncAction.request)),
    mergeMap(() =>
      similarService.getSimilars().pipe(
        switchMap(data => of(fetchSimilarsAsyncAction.success(data))),
        catchError(err =>
          of(
            fetchSimilarsAsyncAction.failure(String(err)),
            enqueueSnackbarAction({
              message: "Get Similars Error",
              variant: "error"
            })
          )
        )
      )
    )
  );
};
