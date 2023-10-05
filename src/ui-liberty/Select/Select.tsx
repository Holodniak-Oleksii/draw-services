import { useRef, useState } from "react";
import { useGeneralContext } from "../../common/context/General";
import { useOutSideClick } from "../../common/hooks/useOutSideClick/useOutSideClick";
import { IconMinus, IconPlus } from "../../common/icons";
import Button from "../Button/Button";
import "./Select.scss";

const Select = () => {
  const { selectedZoom, setSelectedZoom } = useGeneralContext();
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  useOutSideClick([selectRef], () => setOpen(false));

  const handlerIncrement = () => {
    setSelectedZoom((prev) => (prev < 150 ? (prev += 10) : prev));
  };

  const handlerDecrement = () => {
    setSelectedZoom((prev) => (prev > 10 ? (prev -= 10) : prev));
  };

  const handlerOpen = () => {
    setOpen(!open);
  };

  const handlerChooseZoom = (number: number) => {
    setSelectedZoom(number);
    setOpen(false);
  };

  const renderOptions = () => {
    return [...Array(15)].map((_, i) => {
      const number = (i + 1) * 10;
      return (
        <div
          key={i}
          className={`select__item ${
            number === selectedZoom && "select__item_active"
          }`}
          onClick={() => handlerChooseZoom(number)}
        >
          {number}
        </div>
      );
    });
  };

  return (
    <div className='select'>
      <Button onClick={handlerIncrement}>
        <IconPlus />
      </Button>
      <div className='select__drop'>
        <button className='select__value' onClick={handlerOpen}>
          {selectedZoom}
        </button>
        <div className={`select__list ${open && "select__list_open"}`}>
          {renderOptions()}
        </div>
      </div>
      <Button onClick={handlerDecrement}>
        <IconMinus />
      </Button>
    </div>
  );
};

export default Select;
