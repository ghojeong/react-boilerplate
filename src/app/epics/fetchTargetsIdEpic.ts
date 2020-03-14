import { of, empty } from "rxjs";
import {
  switchMap,
  filter,
  catchError,
  mergeMap,
  debounceTime
} from "rxjs/operators";
import { ActionsObservable, Epic } from "redux-observable";
import { isActionOf } from "typesafe-actions";
import isEqual from "lodash/isEqual";
import {
  Actions,
  fetchTargetsIdAsyncAction,
  enqueueSnackbarAction
} from "app/actions";
import * as service from "app/services";
import { Options } from "app/models";

type Service = typeof service;

let cachedPayload: Options | {} = {};

export const fetchTargetsIdEpic: Epic = (
  actions$: ActionsObservable<Actions>,
  _,
  { targetService }: Service
) => {
  return actions$.pipe(
    filter(isActionOf(fetchTargetsIdAsyncAction.request)),
    debounceTime(1000), // NOTE: 1초 이내에 연속적으로 일어난 쓰로틀링 액션은 무시한다.
    mergeMap(({ payload }) => {
      // NOTE: 동일한 payload를 가진 액션들은 무시한다.
      if (isEqual(cachedPayload, payload)) {
        return empty();
      }
      cachedPayload = payload;
      return targetService.postTargets(payload).pipe(
        switchMap(data => of(fetchTargetsIdAsyncAction.success(data))),
        catchError(err =>
          of(
            fetchTargetsIdAsyncAction.failure(String(err)),
            enqueueSnackbarAction({
              message: "Post targets error",
              variant: "error"
            })
          )
        )
      );
    })
  );
};
