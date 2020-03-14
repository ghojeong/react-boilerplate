import { Observable, Subscriber } from "rxjs";
import cloneDeep from "lodash/cloneDeep";
import { ProblemModel } from "app/models";
import * as feProblem from "app/assets/fe-problems.json";

const { data } = feProblem;

export const problemService = {
  getProblems(): Observable<ProblemModel[]> {
    return new Observable((subscriber: Subscriber<ProblemModel[]>) => {
      setTimeout(() => {
        subscriber.next(cloneDeep(data));
        subscriber.complete();
      }, 1000);
    });
  }
};
