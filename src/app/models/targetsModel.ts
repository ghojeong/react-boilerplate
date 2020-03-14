// NOTE: all은 모든 손님, totalPoints 는 입력받은 포인트 범위에 포함되는 손님만
type FilterType = "all" | "totalPoints";
type Age = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type Gender = "male" | "female";

interface Birth {
  month: number;
  day: number;
}
interface Extras {
  lower: number;
  upper: number;
}

export interface Options {
  filterType: FilterType;
  visitInterval: null | number;
  customerTags: string[];
  ages: null | Age[];
  gender: null | Gender[];
  birth: null | Birth;
  extras: null | Extras;
}

export interface TargetsModel {
  id: string;
  options: Options;
  customerCounts: number;
}
