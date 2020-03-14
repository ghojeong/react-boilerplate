import React, { FC } from "react";
import { useStyles } from "./styles";
import { List, ProblemItem } from "app/components";
import { ProblemModel } from "app/models";

interface Props {
  problems: ProblemModel[];
  activeIdx: number;
}
export const ProblemList: FC<Props> = ({ problems, activeIdx }) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {problems.map((problem, idx) => (
        <ProblemItem
          key={`problem-${problem.id}`}
          problem={problem}
          active={idx === activeIdx}
        />
      ))}
    </List>
  );
};
