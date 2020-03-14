import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Chip } from "app/components";
import { clickCustomerTagAction } from "app/actions";
import { customerTagsSelector } from "app/selectors";

export const DetailFilter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { items: customerTags } = useSelector(customerTagsSelector());

  const handleClickFactory = (id: string) => () => {
    dispatch(clickCustomerTagAction({ id }));
  };

  return (
    <div className={classes.root}>
      유형
      {customerTags.map(({ id, name, checked }) => (
        <Chip
          key={id}
          className={classes.chip}
          label={name}
          color={checked ? "primary" : "default"}
          onClick={handleClickFactory(id)}
        />
      ))}
    </div>
  );
};
