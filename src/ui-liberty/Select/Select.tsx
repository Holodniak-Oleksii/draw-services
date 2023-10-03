import { useState } from "react";
import { IconMinus, IconPlus } from "../../assets/icons";
import Button from "../Button/Button";
import "./Select.scss";
const Select = () => {
  const [value, setValue] = useState<number>(100);
  const [open, setOpen] = useState<boolean>(false);

  const renderOptions = () => {
    return [...Array(10)].map((x, i) => {
      const number = (i + 1) * 10;
      return (
        <div
          key={i}
          className={`select__item ${
            number === value && "select__item_active"
          }`}
          onClick={() => {
            setValue(number);
            setOpen(false);
          }}
        >
          {number}
        </div>
      );
    });
  };

  return (
    <div className='select'>
      <Button>
        <IconPlus />
      </Button>
      <div className='select__drop'>
        <button className='select__value' onClick={() => setOpen(!open)}>
          {value}
        </button>
        <div className={`select__list ${open && "select__list_open"}`}>
          {renderOptions()}
        </div>
      </div>
      <Button>
        <IconMinus />
      </Button>
    </div>
  );
};

export default Select;
