import { useGeneralContext } from "../../context/General";
import { ITree } from "../../types/general";
import "./Tree.scss";
import { Controls } from "./components";

const Tree = () => {
  const { tree, diagram } = useGeneralContext();

  const renderTree = (items: ITree[]) => {
    return (
      <ul className='tree__space'>
        {items.map((item) => (
          <li key={item.id} className='tree__item'>
            <div className={`tree__flex tree__flex_${item.hierarchy}`}>
              <div className={`tree__value tree__value_${item.hierarchy}`}>
                {item.value}
              </div>
              <Controls branch={item} />
            </div>
            {item.children && item.children.length
              ? renderTree(item.children)
              : ""}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='tree' ref={diagram}>
      {renderTree(tree)}
    </div>
  );
};

export default Tree;
