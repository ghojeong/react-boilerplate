import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Box, AppBar, CircularProgress, SimilarList } from "app/components";
import { fetchSimilarsAsyncAction } from "app/actions";
import { similarsSelector } from "app/selectors";

export const SimilarsContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading, array: similars } = useSelector(similarsSelector());

  useEffect(() => {
    dispatch(fetchSimilarsAsyncAction.request());
  }, [dispatch]);

  return (
    <Box className={classes.root} borderLeft={1}>
      <AppBar className={classes.appBar} position="sticky">
        <div className={classes.title}>문항 교체/추가</div>
      </AppBar>
      <div className={classes.bodyContainer}>
        {isLoading ? (
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
