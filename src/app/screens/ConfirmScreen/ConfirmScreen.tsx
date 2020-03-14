import React from "react";
import { useStyles } from "./styles";
import { Grid } from "app/components";

export const ConfirmScreen = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={5} className={classes.container}>
        <div>최종 확인 스크린</div>
        <div>렌더링된 미리보기가 보이는 곳</div>
      </Grid>
      <Grid item xs={7} className={classes.container}>
        <div>고객 전체 고객, 학생</div>
        <div>총 4 코인 사용</div>
      </Grid>
    </Grid>
  );
};
