import { Options } from "app/models";

interface ValueLabel<T> {
  value: T;
  label: string;
}

const valueLabelFactory = <T>(value: T, label: string): ValueLabel<T> => ({
  value,
  label
});

export const filterTypes: ValueLabel<Options["filterType"]>[] = [
  valueLabelFactory("all", "전체"),
  valueLabelFactory("totalPoints", "포인트")
];

export const visitIntervals: ValueLabel<Options["visitInterval"]>[] = [
  valueLabelFactory(3, "3일"),
  valueLabelFactory(7, "1주"),
  valueLabelFactory(14, "2주"),
  valueLabelFactory(30, "한달"),
  valueLabelFactory(365, "1년"),
  valueLabelFactory(null, "전체")
];
