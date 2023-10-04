import { useEffect, useState } from "react";
import { useGeneralContext } from "../../context/General";
import { IconPencil, IconPlus } from "../../icons";
import "./DrawingCanvas.scss";
import { treeData } from "./data";
import { ITree } from "./interfaces";

const DrawingCanvas = () => {
  const { canvas, diagram, selectedZoom } = useGeneralContext();
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

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

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    const rect = diagram?.current?.getBoundingClientRect();
    if (rect) {
      setOffsetX(e.clientX - rect.left);
      setOffsetY(e.clientY - rect.top + 80);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    diagram?.current?.style && (diagram.current.style.left = newX + "px");
    diagram?.current?.style && (diagram.current.style.top = newY + "px");
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  useEffect(() => {
    const diagramEL = diagram?.current;
    if (diagramEL) {
      diagramEL.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      diagramEL?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [diagram?.current, selectedZoom, isDragging]);

  return (
    <div className='canvas'>
      <div className='canvas__container' ref={diagram}>
        <div className='tree' ref={canvas}>
          {renderTree(treeData)}
        </div>
      </div>
    </div>
  );
};

export default DrawingCanvas;
