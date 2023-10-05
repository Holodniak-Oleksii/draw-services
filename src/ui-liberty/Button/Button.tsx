import { FC } from "react";
import "./Button.scss";
import { IButton } from "./interfaces";
const Button: FC<IButton> = (props) => {
  const { children } = props;
  return (
    <button className='button' {...props}>
      {children}
    </button>
  );
};

export default Button;
