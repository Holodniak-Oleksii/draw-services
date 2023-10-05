import { FC, useState } from "react";
import { useGeneralContext } from "../../../../context/General";
import { IconPencil, IconPlus } from "../../../../icons";
import { IControls } from "../../interfaces";
import Portal from "../Portal/Portal";
import "./Controls.scss";
import { findAndEditBranch, findAndRemoveBranch, findParent } from "./helpers";

const Controls: FC<IControls> = (props) => {
  const { branch } = props;
  const { setTree, count, setCount } = useGeneralContext();
  const [inputCategory, setInputCategory] = useState<string>("");
  const [openPortal, setOpenPortal] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handlerSetEditBranch = () => {
    setIsEditable(true);
    setOpenPortal(true);
    setInputCategory(branch.value);
  };

  const onCancel = () => {
    setInputCategory("");
    setOpenPortal(false);
    setIsEditable(false);
  };

  const addBranch = () => {
    setTree((prev) => {
      const updatedTree = [...prev];
      findParent(updatedTree, branch.id, count.id, inputCategory);
      return updatedTree;
    });
    setCount((prev) => ({
      categories: (prev.categories += 1),
      id: (prev.id += 1),
    }));
    onCancel();
  };

  const editBranch = () => {
    setTree((prev) => {
      const updatedTree = [...prev];
      findAndEditBranch(updatedTree, branch.id, inputCategory);
      return updatedTree;
    });
    onCancel();
  };

  const removeBranch = () => {
    setTree((prev) => {
      const updatedTree = [...prev];
      findAndRemoveBranch(updatedTree, branch.id, setCount);
      return updatedTree;
    });
  };

  return (
    <div className='controls'>
      {openPortal && (
        <Portal
          isEditable={isEditable}
          cancel={onCancel}
          submit={isEditable ? editBranch : addBranch}
          inputCategory={inputCategory}
          setInputCategory={setInputCategory}
        />
      )}
      <button
        className='controls__add controls__button'
        onClick={() => setOpenPortal(!openPortal)}
      >
        <IconPlus />
      </button>
      {branch.hierarchy >= 1 && (
        <>
          <button
            className='controls__edit controls__button'
            onClick={handlerSetEditBranch}
          >
            <IconPencil />
          </button>
          <button
            className='controls__remove controls__button'
            onClick={removeBranch}
          >
            <IconPlus />
          </button>
        </>
      )}
    </div>
  );
};

export default Controls;
