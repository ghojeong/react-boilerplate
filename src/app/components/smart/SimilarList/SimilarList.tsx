import React, { FC } from "react";
import { useStyles } from "./styles";
import { List, SimilarItem } from "app/components";
import { ProblemModel } from "app/models";

interface Props {
  similars: ProblemModel[];
}
export const SimilarList: FC<Props> = ({ similars }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {similars.map((similar, idx) => (
        <SimilarItem
          key={`similar-${similar.id}`}
          similar={similar}
          similarIdx={idx}
        />
      ))}
    </List>
  );
};
