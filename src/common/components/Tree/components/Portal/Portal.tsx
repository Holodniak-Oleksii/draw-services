import { FC, useRef } from "react";
import { Button } from "../../../../../ui-liberty";
import { useOutSideClick } from "../../../../hooks/useOutSideClick/useOutSideClick";
import { IPortal } from "../../interfaces";
import "./Portal.scss";

const Portal: FC<IPortal> = (props) => {
  const { setInputCategory, inputCategory, cancel, submit, isEditable } = props;
  const portalRef = useRef<HTMLFormElement>(null);
  useOutSideClick([portalRef], cancel);

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCategory(e.target.value);
  };

  return (
    <form className='portal' ref={portalRef} onSubmit={submit}>
      <input
        onChange={handlerInputChange}
        value={inputCategory}
        className='portal__input'
        placeholder={isEditable ? "Change category name" : "Category name"}
        required
      />
      <div className='portal__buttons'>
        <Button
          onKeyDown={(e) => {
            portalRef.current?.submit();
          }}
        >
          {isEditable ? "Change" : "Submit"}
        </Button>
        <Button onClick={cancel} type='button'>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default Portal;
