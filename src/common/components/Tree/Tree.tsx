import { useGeneralContext } from "../../context/General";
import { IconPencil, IconPlus } from "../../icons";
import { ITree } from "../../types/general";
import "./Tree.scss";
import { findAndRemoveBranch, findParent } from "./helpers";

const Tree = () => {
  const { tree, diagram, setTree, count, setCount } = useGeneralContext();

  const addBranch = (parent: ITree) => {
    setTree((prev) => {
      const updatedTree = [...prev];
      findParent(updatedTree, parent.id, count.id);
      return updatedTree;
    });
    setCount((prev) => ({
      categories: (prev.categories += 1),
      id: (prev.id += 1),
    }));
  };

  const removeBranch = (parent: ITree) => {
    setTree((prev) => {
      const updatedTree = [...prev];
      findAndRemoveBranch(updatedTree, parent.id, setCount);
      return updatedTree;
    });
  };

  const renderTree = (items: ITree[]) => {
    return (
      <ul className='tree__space'>
        {items.map((item) => (
          <li key={item.id} className='tree__item'>
            <div className={`tree__flex`}>
              <div className={`tree__value tree__value_${item.hierarchy}`}>
                {item.value}
              </div>
              <div className='controls'>
                <button
                  className='controls__add'
                  onClick={() => addBranch(item)}
                >
                  <IconPlus />
                </button>
                {item.hierarchy >= 1 && (
                  <>
                    <button className='controls__edit'>
                      <IconPencil />
                    </button>
                    <button
                      className='controls__remove'
                      onClick={() => removeBranch(item)}
                    >
                      <IconPlus />
                    </button>
                  </>
                )}
              </div>
            </div>
            {item.children && item.children.length
              ? renderTree(item.children)
              : ""}
          </li>
        ))}
      </ul>
    );
  };

  return <div ref={diagram}>{renderTree(tree)}</div>;
};

export default Tree;
