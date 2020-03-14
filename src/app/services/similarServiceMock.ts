import { Observable, Subscriber } from "rxjs";
import cloneDeep from "lodash/cloneDeep";
import { ProblemModel } from "app/models";
import * as feSimilars from "app/assets/fe-similars.json";

const { data } = feSimilars;

export const similarService = {
  getSimilars(): Observable<ProblemModel[]> {
    return new Observable((subscriber: Subscriber<ProblemModel[]>) => {
      setTimeout(() => {
        subscriber.next(cloneDeep(data));
        subscriber.complete();
      }, 1000);
    });
  }
};
