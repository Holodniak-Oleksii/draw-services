import { useGeneralContext } from "../../context/General";
import { ITree } from "../../types/general";
import "./List.scss";
const List = () => {
  const { tree } = useGeneralContext();

  const renderList = (items: ITree[]) => {
    return items.map((item) => (
      <details key={item.id} className='list__item' open>
        <summary
          className={`list__value list__value_${item.hierarchy} ${
            !(item.children && item.children.length) && "list__value_nomore"
          }`}
        >
          {item.value}
        </summary>
        {item.children && item.children.length ? renderList(item.children) : ""}
      </details>
    ));
  };
  return <div className='list'>{renderList(tree)}</div>;
};

export default List;
