import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import {
  Box,
  AppBar,
  Typography,
  Divider,
  CircularProgress,
  ProblemList
} from "app/components";
import { fetchProblemsAsyncAction } from "app/actions";
import { problemsSelector } from "app/selectors";

export const ProblemsContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading, array: problems, activeIdx } = useSelector(
    problemsSelector()
  );

  useEffect(() => {
    dispatch(fetchProblemsAsyncAction.request());
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      <AppBar className={classes.appBar} position="sticky">
        <Typography variant="h6">학습지 상세 편집</Typography>
      </AppBar>
      <div className={classes.bodyContainer}>
        {isLoading ? (
          <div className={classes.circularProgress}>
            <CircularProgress />
          </div>
        ) : (
          <ProblemList problems={problems} activeIdx={activeIdx}></ProblemList>
        )}
      </div>
    </Box>
  );
};
