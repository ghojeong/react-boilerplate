import React, { FC } from "react";
import { useStyles } from "./styles";
import { ProblemModel } from "app/models";
import { Button } from "app/components";

interface Props {
  similar: ProblemModel;
  similarIdx: number;
}
export const SimilarItem: FC<Props> = ({ similar, similarIdx }) => {
  const classes = useStyles();
  const { problemType, unitName, problemURL } = similar;

  return (
    <li className={classes.root}>
      <div className={classes.header}>
        <span className={classes.problemType}>{problemType}</span>
        <span className={classes.unitName}>{unitName}</span>
        <Button className={classes.button}>추가</Button>
        <Button className={classes.button}>교체</Button>
      </div>
      <div className={classes.body}>
        <span className={classes.idx}>{similarIdx + 1}</span>
        <img src={problemURL} alt={"N/A"} />
      </div>
    </li>
  );
};
