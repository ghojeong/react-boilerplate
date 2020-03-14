import React from "react";
import { useStyles } from "./styles";
import { Box } from "app/components";

export const ProblemsContainer = () => {
  const classes = useStyles();

  return (
    <Box borderRight={1} className={classes.root}>
      <div>학습지 상세 편집 sticky</div>
      <div>Problems 리스트</div>
    </Box>
  );
};
