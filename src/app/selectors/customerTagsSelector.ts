import { RootState } from "app/reducers";

export const customerTagsSelector = () => ({ customerTags }: RootState) => ({
  ...customerTags,
  items: customerTags.items.map(item => ({
    ...item,
    checked: !!customerTags.checkedItems[item.id]
  }))
});
