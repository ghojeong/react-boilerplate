import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import {
  Box,
  AppBar,
  CircularProgress,
  SimilarList,
  Button
} from "app/components";
import { fetchSimilarsAsyncAction } from "app/actions";
import { similarsSelector, problemsSelector } from "app/selectors";

export const SimilarsContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading, array: similars } = useSelector(similarsSelector());
  const { activeIdx } = useSelector(problemsSelector());

  useEffect(() => {
    if (activeIdx >= 0) {
      dispatch(fetchSimilarsAsyncAction.request());
    }
  }, [dispatch, activeIdx]);

  return (
    <Box className={classes.root}>
      <AppBar className={classes.appBar} position="sticky">
        <div className={classes.title}>문항 교체/추가</div>
      </AppBar>
      <div className={classes.bodyContainer}>
        {activeIdx < 0 ? (
          <div className={classes.placeholder}>
            <div>
              <Button disabled>유사문항</Button> 버튼을 누르면
            </div>
            <div>해당 문제의 유사문항을 볼 수 있습니다.</div>
          </div>
        ) : isLoading ? (
          <div className={classes.circularProgress}>
            <CircularProgress />
          </div>
        ) : (
          <SimilarList similars={similars}></SimilarList>
        )}
      </div>
    </Box>
  );
};
