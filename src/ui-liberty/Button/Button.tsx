import { FC } from "react";
import "./Button.scss";
import { IButton } from "./interfaces";
const Button: FC<IButton> = (props) => {
  const { children } = props;
  return <button className='button'>{children}</button>;
};

export default Button;
