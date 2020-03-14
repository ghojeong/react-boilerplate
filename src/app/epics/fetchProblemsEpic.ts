import { of } from "rxjs";
import { switchMap, filter, catchError, mergeMap } from "rxjs/operators";
import { ActionsObservable, Epic } from "redux-observable";
import { isActionOf } from "typesafe-actions";
import {
  Actions,
  fetchProblemsAsyncAction,
  enqueueSnackbarAction
} from "app/actions";
import * as service from "app/services";

type Service = typeof service;

export const fetchProblemsEpic: Epic = (
  actions$: ActionsObservable<Actions>,
  _,
  { problemService }: Service
) => {
  return actions$.pipe(
    filter(isActionOf(fetchProblemsAsyncAction.request)),
    mergeMap(() =>
      problemService.getProblems().pipe(
        switchMap(data => of(fetchProblemsAsyncAction.success(data))),
        catchError(err =>
          of(
            fetchProblemsAsyncAction.failure(String(err)),
            enqueueSnackbarAction({
              message: "Get Problems Error",
              variant: "error"
            })
          )
        )
      )
    )
  );
};
