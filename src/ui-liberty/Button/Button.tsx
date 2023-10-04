import { FC } from "react";
import "./Button.scss";
import { IButton } from "./interfaces";
const Button: FC<IButton> = (props) => {
  const { children, onClick } = props;
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
