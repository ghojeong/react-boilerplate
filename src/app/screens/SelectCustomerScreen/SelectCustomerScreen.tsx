import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import {
  FilterTypeToggle,
  LowerUpperInput,
  VisitIntervalSelect,
  Grid,
  Button,
  DetailFilter
} from "app/components";
import { filterTypes } from "app/assets";
import { fetchCustomerTagsAsyncAction } from "app/actions";
import { targetFilterSelector, customerTagsSelector } from "app/selectors";

export const SelectCustomerScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filterTypeIdx } = useSelector(targetFilterSelector());
  const { items: customerTags } = useSelector(customerTagsSelector());
  const [isDetailFilterOpen, setIsDetailFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCustomerTagsAsyncAction.request());
  }, [dispatch]);

  const handleDetailFilterOpenCloseBtn = () => {
    setIsDetailFilterOpen(!isDetailFilterOpen);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>고객 필터</div>
        <FilterTypeToggle />
        {filterTypes[filterTypeIdx].value === "totalPoints" && (
          <LowerUpperInput />
        )}
      </div>
      <div className={classes.container}>
        <div>마지막 방문일</div>
        <VisitIntervalSelect />
        <span>기간 동안 방문한 고객</span>
      </div>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={8}>
            <div>상세 필터</div>
            <div>상세필터를 설정하지 않으면, 전체 고객이 선택됩니다.</div>
          </Grid>
          <Grid item xs={4} className={classes.rightItemGrid}>
            <Button
              onClick={handleDetailFilterOpenCloseBtn}
              disabled={!(customerTags && customerTags.length > 0)}
            >
              {isDetailFilterOpen ? "닫기" : "열기"}
            </Button>
          </Grid>
        </Grid>
        {isDetailFilterOpen && customerTags && <DetailFilter />}
      </div>
      <div className={classes.container}>
        수신거부 및 블랙리스트 고객, QR카드 적립 고객은 자동 제외됩니다.
      </div>
    </div>
  );
};
