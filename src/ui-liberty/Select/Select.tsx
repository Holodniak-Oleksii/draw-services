import { useState } from "react";
import { useGeneralContext } from "../../common/context/General";
import { IconMinus, IconPlus } from "../../common/icons";
import Button from "../Button/Button";
import "./Select.scss";

const Select = () => {
  const { selectedZoom, setSelectedZoom } = useGeneralContext();
  const [open, setOpen] = useState<boolean>(false);

  const renderOptions = () => {
    return [...Array(15)].map((x, i) => {
      const number = (i + 1) * 10;
      return (
        <div
          key={i}
          className={`select__item ${
            number === selectedZoom && "select__item_active"
          }`}
          onClick={() => {
            setSelectedZoom(number);
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
      <Button
        onClick={() =>
          setSelectedZoom((prev) => (prev < 150 ? (prev += 10) : prev))
        }
      >
        <IconPlus />
      </Button>
      <div className='select__drop'>
        <button className='select__value' onClick={() => setOpen(!open)}>
          {selectedZoom}
        </button>
        <div className={`select__list ${open && "select__list_open"}`}>
          {renderOptions()}
        </div>
      </div>
      <Button
        onClick={() =>
          setSelectedZoom((prev) => (prev > 10 ? (prev -= 10) : prev))
        }
      >
        <IconMinus />
      </Button>
    </div>
  );
};

export default Select;
