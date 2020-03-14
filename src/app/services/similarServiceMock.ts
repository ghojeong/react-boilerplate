import { Observable, Subscriber } from "rxjs";
import { ProblemModel } from "app/models";

const data: ProblemModel[] = [
  {
    id: 784,
    unitCode: 21101115,
    answerData: "#46,92,138,184",
    problemLevel: 2,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/32/8_11032_66bTO_0_p.png",
    unitName: "공배수와 최소공배수",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 192,
    correctTimes: 125,
    hwpExist: 2,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 1034,
    unitCode: 21101306,
    answerData: "#148,52",
    problemLevel: 3,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/40/8_11040_1sKUQ_10_p.png",
    unitName: "최대공약수와 최소공배수를 이용하여 수 구하기",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 76,
    correctTimes: 29,
    hwpExist: 2,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 216065,
    unitCode: 21111103,
    answerData: "4",
    problemLevel: 1,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/11103/9_21111103_wUCD3_AKY_p.png",
    unitName: "유리수의 곱셈",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 84,
    correctTimes: 71,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 1931,
    unitCode: 21111206,
    answerData: "4",
    problemLevel: 4,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/74/8_11074_XnE0n_10_p.png",
    unitName: "aⁿ의 계산, 거듭제곱",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 88,
    correctTimes: 30,
    hwpExist: 2,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 216219,
    unitCode: 21111503,
    answerData: "4",
    problemLevel: 3,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/11503/9_21111503_Tyapk_EgX_p.png",
    unitName: "곱셈과 나눗셈의 혼합 계산",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 38,
    correctTimes: 15,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 2424,
    unitCode: 21120115,
    answerData: "150-60aㅣ-60a+150[km]",
    problemLevel: 3,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/93/8_11093_9FkEn_8_p.png",
    unitName: "문자를 사용한 식(4) -속력",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 132,
    correctTimes: 90,
    hwpExist: 2,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 3953,
    unitCode: 21122109,
    answerData: "36.7[%]",
    problemLevel: 5,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/142/8_11142_dTsip_35_p.png",
    unitName: "거리, 속력, 시간에 대한 문제(3) -시차가 발생하는 경우",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 18,
    correctTimes: 6,
    hwpExist: 2,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 215170,
    unitCode: 21130012,
    answerData: "4",
    problemLevel: 2,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/30012/9_21130012_XCthj_NAo_p.png",
    unitName: "함숫값 구하기",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 88,
    correctTimes: 77,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 212731,
    unitCode: 21130015,
    answerData: "5",
    problemLevel: 2,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/30015/9_21130015_KtFJf_oFE_p.png",
    unitName: "함숫값 구하기(1) -f(x)=(x에 대한 조건) 꼴인 함수",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 80,
    correctTimes: 65,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 215085,
    unitCode: 21130015,
    answerData: "6",
    problemLevel: 4,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/m/1/1/30015/9_21130015_wMyiL_dXK_p.png",
    unitName: "함숫값 구하기(1) -f(x)=(x에 대한 조건) 꼴인 함수",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 44,
    correctTimes: 33,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  }
];

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
