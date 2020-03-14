import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash/isEqual";
import { useStyles } from "./styles";
import { Button, CircularProgress } from "app/components";
import { fetchTargetsIdAsyncAction } from "app/actions";
import {
  isLoadingSelector,
  targetsSelector,
  optionsSelector
} from "app/selectors";
import { Options } from "app/models";

let cachedOptions: Options | {} = {};

export const CustomerCounts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(isLoadingSelector());
  const { item } = useSelector(targetsSelector());
  const { options } = useSelector(optionsSelector());

  useEffect(() => {
    // NOTE: 동일한 options 들은 dispatch 하지 않는다.
    if (!isEqual(cachedOptions, options)) {
      cachedOptions = options;
      dispatch(fetchTargetsIdAsyncAction.request(options));
    }
  }, [dispatch, options]);

  return (
    <>
      {isLoading ? (
        <Button disabled>
          <CircularProgress color="inherit" />
        </Button>
      ) : (
        <>
          <span className={classes.customerCountsText}>
            <b>{item ? item.customerCounts : 0}</b>명{" "}
          </span>
          고객 선택
        </>
      )}
    </>
  );
};
