import { httpClient, mapApiResponse } from "app/lib";
import { TargetsModel, Options } from "app/models";

export const targetService = {
  postTargets(options: Options) {
    return httpClient
      .post<TargetsModel>("/targets", { options })
      .pipe(mapApiResponse());
  }
};
