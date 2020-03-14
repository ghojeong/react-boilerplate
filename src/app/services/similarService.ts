import { httpClient, mapApiResponse } from "app/lib";
import { ProblemModel } from "app/models";

export const similarService = {
  getSimilars() {
    return httpClient
      .get<ProblemModel[]>("/fe-similars.json")
      .pipe(mapApiResponse());
  }
};
