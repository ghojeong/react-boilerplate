import { Options } from "app/models";
import { filterTypes, visitIntervals } from "app/assets";
import { RootState } from "app/reducers";

export const optionsSelector = () => ({
  targetFilter: { filterTypeIdx, visitIntervalIdx, lower, upper },
  customerTags: { checkedItems: checkedCustomerTags }
}: RootState): { options: Options } => {
  const filterType = filterTypes[filterTypeIdx].value;
  const visitInterval = visitIntervals[visitIntervalIdx].value;
  const customerTags = Object.keys(checkedCustomerTags).reduce(
    (accArr: string[], currId) => {
      if (checkedCustomerTags[currId]) {
        accArr.push(currId);
        return accArr;
      }
      return accArr;
    },
    []
  );
  const extras = filterType === "totalPoints" ? { lower, upper } : null;

  return {
    options: {
      filterType,
      visitInterval,
      customerTags,
      ages: null,
      gender: null,
      birth: null,
      extras
    }
  };
};
