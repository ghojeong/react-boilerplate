import { Observable, Subscriber } from "rxjs";
import { ProblemModel } from "app/models";
import * as feSimilars from "app/assets/fe-similars.json";

const { data } = feSimilars;

export const similarService = {
  getSimilars(): Observable<ProblemModel[]> {
    return new Observable((subscriber: Subscriber<ProblemModel[]>) => {
      setTimeout(() => {
        subscriber.next(data);
        subscriber.complete();
      }, 1000);
    });
  }
};
