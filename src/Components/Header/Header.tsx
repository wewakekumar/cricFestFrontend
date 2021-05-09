import React from "react";

import classes from "./Header.module.scss";

const Header = (props: any) => {
  return <div className={classes.header}>{props.children}</div>;
};

export default Header;
