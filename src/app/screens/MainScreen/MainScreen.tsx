import React from "react";
import { useStyles } from "./styles";
import { Grid } from "app/components";

export const MainScreen = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={5} className={classes.container}>
        <div>메시지 작성 스크린</div>
        <div>렌더링된 미리보기가 보이는 곳</div>
      </Grid>
      <Grid item xs={7} className={classes.container}>
        <div>메시지 내용</div>
        <div>63/800자</div>
        <div>
          <div>ed coffee 본점</div>
          <div>홍기롱님 본점입니다.</div>
        </div>
      </Grid>
    </Grid>
  );
};
