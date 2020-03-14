import { httpClient, mapApiResponse } from "app/lib";
import { CustomerTagModel } from "app/models";

export const customerTagService = {
  getCustomerTags() {
    return httpClient
      .get<CustomerTagModel[]>("/customer-tags")
      .pipe(mapApiResponse());
  }
};
