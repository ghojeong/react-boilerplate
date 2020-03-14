import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Box, AppBar, ProblemList } from "app/components";
import { fetchProblemsAsyncAction } from "app/actions";
import { problemsSelector } from "app/selectors";

export const ProblemsContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading, errMsg, array: problems, activeIdx } = useSelector(
    problemsSelector()
  );

  useEffect(() => {
    dispatch(fetchProblemsAsyncAction.request());
  }, [dispatch]);

  return (
    <Box borderRight={1} className={classes.root}>
      <AppBar position="sticky" style={{ height: "10%" }}>
        <div>학습지 상세 편집 sticky</div>
      </AppBar>
      <div style={{ overflow: "auto", height: "90%" }}>
        <ProblemList problems={problems} activeIdx={activeIdx}></ProblemList>
      </div>
    </Box>
  );
};
