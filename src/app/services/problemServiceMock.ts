import { Observable, Subscriber } from "rxjs";
import { ProblemModel } from "app/models";

const data: ProblemModel[] = [
  {
    id: 144148,
    unitCode: 31101118,
    answerData: "",
    problemLevel: 4,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01118/9_31101118_SVrl8_OBN_p.png",
    unitName: "나머지정리",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 32,
    correctTimes: 12,
    hwpExist: 1,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 144473,
    unitCode: 31101121,
    answerData: "3",
    problemLevel: 2,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01121/9_31101121_pAjzf_jbV_p.png",
    unitName: "나머지정리를 이용한 미정계수 구하기",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 35,
    correctTimes: 28,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 144151,
    unitCode: 31101121,
    answerData: "-7",
    problemLevel: 3,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01121/9_31101121_RhFRy_Yml_p.png",
    unitName: "나머지정리를 이용한 미정계수 구하기",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 33,
    correctTimes: 20,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 268355,
    unitCode: 31111306,
    answerData: "2",
    problemLevel: 5,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/Mo/MO_201006/h2/201006_Bu_A/15_p.png",
    unitName: "근과 계수와의 관계를 이용한 식의 값 구하기",
    needCheckLayout: 0,
    source: 100,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 18,
    correctTimes: 8,
    hwpExist: 1,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 39863,
    unitCode: 31120015,
    answerData: "5",
    problemLevel: 2,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/153/9_311153_Ihm8R_0_p.png",
    unitName: "세 변의 길이와 삼각형의 모양에 대한 문제",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 99,
    correctTimes: 78,
    hwpExist: 2,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 147023,
    unitCode: 31122006,
    answerData: "",
    problemLevel: 1,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/22006/9_31122006_CJyx9_pAb_p.png",
    unitName: "일반형에서 중심과 반지름 구하기",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 41,
    correctTimes: 34,
    hwpExist: 1,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 40850,
    unitCode: 31122215,
    answerData: "6",
    problemLevel: 4,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/217/9_311217_5dig4_17_p.png",
    unitName: "원과 직선이 두 점에서 만날 때 현의 길이",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 25,
    correctTimes: 8,
    hwpExist: 2,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 41254,
    unitCode: 31123224,
    answerData: "2",
    problemLevel: 3,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/239/9_311239_eT9Em_27_p.png",
    unitName: "y=ax+b에 대한 대칭이동",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 13,
    correctTimes: 9,
    hwpExist: 2,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 41303,
    unitCode: 31124003,
    answerData: "4[개]",
    problemLevel: 2,
    problemType: "주관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/243/9_311243_Tu277_0_p.png",
    unitName: "부등식 y > f(x), y < f(x)가 나타내는 영역",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 20,
    correctTimes: 12,
    hwpExist: 2,
    scorable: 0,
    tagTop: null,
    bookDataId: 0
  },
  {
    id: 41356,
    unitCode: 31124009,
    answerData: "4",
    problemLevel: 5,
    problemType: "객관식",
    problemURL:
      "https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/245/9_311245_cuE1r_22_p.png",
    unitName: "부등식의 영역에 한 점이 포함될 조건",
    needCheckLayout: 0,
    source: 0,
    hide: 0,
    curriculumNumber: 9,
    cebuCode: 0,
    totalTimes: 17,
    correctTimes: 9,
    hwpExist: 2,
    scorable: 1,
    tagTop: null,
    bookDataId: 0
  }
];

export const problemService = {
  getProblems(): Observable<ProblemModel[]> {
    return new Observable((subscriber: Subscriber<ProblemModel[]>) => {
      setTimeout(() => {
        subscriber.next(data);
        subscriber.complete();
      }, 1000);
    });
  }
};
