import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { MenuItem, Select } from "app/components";
import { visitIntervals } from "app/assets";
import { changeVisitIntervalAction } from "app/actions";
import { targetFilterSelector } from "app/selectors";

export const VisitIntervalSelect = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { visitIntervalIdx } = useSelector(targetFilterSelector());

  const handleVisitIntervalChange = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    dispatch(
      changeVisitIntervalAction({
        visitIntervalIdx: Number(event.target.value)
      })
    );
  };

  return (
    <Select
      className={classes.select}
      value={visitIntervalIdx}
      onChange={handleVisitIntervalChange}
    >
      {visitIntervals.map(({ label }, idx) => (
        <MenuItem key={`visitInterval${idx}`} value={idx}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};
