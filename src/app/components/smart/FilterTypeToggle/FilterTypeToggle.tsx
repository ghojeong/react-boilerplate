import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { ToggleButtonGroup, ToggleButton } from "app/components";
import { filterTypes } from "app/assets";
import { targetFilterSelector } from "app/selectors";
import { changeFilterTypeAction } from "app/actions";

export const FilterTypeToggle = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filterTypeIdx } = useSelector(targetFilterSelector());

  const handleFilterTypeChange = (
    event: MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    dispatch(changeFilterTypeAction({ filterTypeIdx: Number(value) }));
  };

  return (
    <ToggleButtonGroup
      value={filterTypeIdx}
      exclusive
      onChange={handleFilterTypeChange}
    >
      {filterTypes.map(({ label }, idx) => (
        <ToggleButton
          className={classes.toggleButton}
          key={`filterType${idx}`}
          value={idx}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
