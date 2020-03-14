import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Input, InputAdornment } from "app/components";
import { changeLowerAction, changeUpperAction } from "app/actions";
import { targetFilterSelector } from "app/selectors";

export const LowerUpperInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { lower, upper } = useSelector(targetFilterSelector());

  const handleLowerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const lower = Number(event.target.value);
    if (lower > 0) {
      dispatch(changeLowerAction({ lower }));
    }
  };
  const handleUpperInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const upper = Number(event.target.value);
    if (upper > 0) {
      dispatch(changeUpperAction({ upper }));
    }
  };

  return (
    <div>
      <Input
        className={classes.input}
        type="number"
        value={lower}
        onChange={handleLowerInputChange}
        endAdornment={<InputAdornment position="end">P</InputAdornment>}
      />
      <span className={classes.icon}>-</span>
      <Input
        className={classes.input}
        type="number"
        value={upper}
        onChange={handleUpperInputChange}
        endAdornment={<InputAdornment position="end">P</InputAdornment>}
      />
      <div>최소 1P</div>
    </div>
  );
};
