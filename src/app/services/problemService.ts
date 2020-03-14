import { httpClient, mapApiResponse } from "app/lib";
import { ProblemModel } from "app/models";

export const problemService = {
  getProblems() {
    return httpClient
      .get<ProblemModel[]>("/fe-problems.json")
      .pipe(mapApiResponse());
  }
};
