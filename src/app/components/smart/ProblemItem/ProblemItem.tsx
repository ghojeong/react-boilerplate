import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import { ProblemModel } from "app/models";
import { Button, Divider } from "app/components";
import { activateProblemAction, removeProblemAction } from "app/actions";

interface Props {
  problem: ProblemModel;
  problemArrIdx: number;
  active: boolean;
}
export const ProblemItem: FC<Props> = ({ problem, problemArrIdx, active }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { problemType, unitName, problemURL } = problem;

  const handleActivateBtnClick = () => {
    dispatch(activateProblemAction({ problemArrIdx }));
  };
  const handleRemoveBtnClick = () => {
    dispatch(removeProblemAction({ problemArrIdx }));
  };

  return (
    <li className={classes.root}>
      <div className={classes.header}>
        <span className={classes.problemType}>{problemType}</span>
        <span className={classes.unitName}>{unitName}</span>
        <Button
          className={classes.button}
          active={active}
          onClick={handleActivateBtnClick}
        >
          유사문항
        </Button>
        <Button className={classes.button} onClick={handleRemoveBtnClick}>
          삭제
        </Button>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.body}>
        <span className={classes.idx}>{problemArrIdx + 1}</span>
        <img src={problemURL} alt={"N/A"} />
      </div>
    </li>
  );
};
