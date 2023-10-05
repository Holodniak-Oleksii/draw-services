import { useGeneralContext } from "../../context/General";
import { IconPencil, IconPlus } from "../../icons";
import { ITree } from "../../types/general";
import "./Tree.scss";
const Tree = () => {
  const { treeData, diagram } = useGeneralContext();
  const renderTree = (treeData: ITree[]) => {
    return (
      <ul className='tree__space'>
        {treeData.map((item) => (
          <li key={item.id} className='tree__item'>
            <div className={`tree__value tree__value_${item.hierarchy}`}>
              {item.value}
              <div className='controls'>
                <button className='controls__add'>
                  <IconPlus />
                </button>
                {item.hierarchy > 1 && (
                  <>
                    <button className='controls__edit'>
                      <IconPencil />
                    </button>
                    <button className='controls__remove'>
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
  return <div ref={diagram}>{renderTree(treeData)}</div>;
};

export default Tree;
