import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { ProblemModel } from "app/models";
import { Button, Divider } from "app/components";
import {
  addSimilarToProblemAction,
  replaceSimilarWithProblemAction
} from "app/actions";
import { problemsSelector } from "app/selectors";

interface Props {
  similar: ProblemModel;
  similarArrIdx: number;
}
export const SimilarItem: FC<Props> = ({ similar, similarArrIdx }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { problemType, unitName, problemURL } = similar;
  const { activeIdx, array: problems } = useSelector(problemsSelector());

  const handleAddBtnClick = () => {
    dispatch(
      addSimilarToProblemAction({
        problemArrIdx: activeIdx,
        similarArrIdx,
        similar
      })
    );
  };
  const handleReplaceBtnClick = () => {
    dispatch(
      replaceSimilarWithProblemAction({
        problemArrIdx: activeIdx,
        problem: problems[activeIdx],
        similarArrIdx,
        similar
      })
    );
  };

  return (
    <li className={classes.root}>
      <div className={classes.header}>
        <span className={classes.problemType}>{problemType}</span>
        <span className={classes.unitName}>{unitName}</span>
        <Button className={classes.button} onClick={handleAddBtnClick}>
          추가
        </Button>
        <Button className={classes.button} onClick={handleReplaceBtnClick}>
          교체
        </Button>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.body}>
        <span className={classes.idx}>{similarArrIdx + 1}</span>
        <img src={problemURL} alt={"N/A"} />
      </div>
    </li>
  );
};
