import { FC } from "react";
import "./Button.scss";
import { IButton } from "./interfaces";
const Button: FC<IButton> = (props) => {
  const { children, theme = "filled" } = props;
  return (
    <button className={`button button__${theme}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
