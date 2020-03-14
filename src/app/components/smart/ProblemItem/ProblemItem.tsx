import React, { FC } from "react";
import { useStyles } from "./styles";
import { ProblemModel } from "app/models";
import { Button } from "app/components";

interface Props {
  problem: ProblemModel;
  problemIdx: number;
  active: boolean;
}
export const ProblemItem: FC<Props> = ({ problem, problemIdx, active }) => {
  const classes = useStyles();
  const { problemType, unitName, problemURL } = problem;

  return (
    <li className={classes.root}>
      <div className={classes.header}>
        <span className={classes.problemType}>{problemType}</span>
        <span className={classes.unitName}>{unitName}</span>
        <Button className={classes.button}>유사문항</Button>
        <Button className={classes.button}>삭제</Button>
      </div>
      <div className={classes.body}>
        <span className={classes.idx}>{problemIdx + 1}</span>
        <img src={problemURL} alt={"N/A"} />
      </div>
    </li>
  );
};
