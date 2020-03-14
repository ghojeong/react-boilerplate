import React, { FC } from "react";
import { useStyles } from "./styles";
import { ListItem } from "app/components";
import { ProblemModel } from "app/models";

interface Props {
  problem: ProblemModel;
  active: boolean;
}
export const ProblemItem: FC<Props> = ({ problem, active }) => {
  const classes = useStyles();

  return (
    <ListItem key={`problem-${problem.id}`}>{JSON.stringify(problem)}</ListItem>
  );
};
