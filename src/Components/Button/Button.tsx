import React from "react";
import classes from "./Button.module.scss";

const Button = (props: any) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default Button;
