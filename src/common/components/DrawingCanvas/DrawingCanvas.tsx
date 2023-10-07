import { useEffect, useRef, useState } from "react";
import { useGeneralContext } from "../../context/General";
import { IconArrow } from "../../icons";
import Tree from "../Tree/Tree";
import "./DrawingCanvas.scss";
const DISTANCE = 50;
const DrawingCanvas = () => {
  const { canvas, diagram, setSelectedZoom } = useGeneralContext();
  const fieldRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const onDirectionMove = (id: number) => {
    if (canvas?.current) {
      const left = canvas.current.style.left;
      const top = canvas.current.style.top;
      const x = +left.slice(0, left.length - 2);
      const y = +top.slice(0, top.length - 2);

      switch (id) {
        case 0:
          canvas.current.style.top = `${y + DISTANCE}px`;
          break;
        case 1:
          canvas.current.style.left = `${x - DISTANCE}px`;
          break;
        case 2:
          canvas.current.style.top = `${y - DISTANCE}px`;
          break;
        case 3:
          canvas.current.style.left = `${x + DISTANCE}px`;
          break;
      }
    }
  };
  const handleMouseWheel = (e: WheelEvent) => {
    if (diagram?.current) {
      setSelectedZoom((prev) => {
        if (prev === 10 && e.deltaY > 0) {
          return prev;
        } else if (prev === 150 && e.deltaY < 0) {
          return prev;
        } else {
          const newZoom = prev + (e.deltaY > 0 ? -10 : 10);
          return Math.max(10, Math.min(150, newZoom));
        }
      });
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    const rect = canvas?.current?.getBoundingClientRect();
    if (rect && canvas?.current) {
      setOffsetX(e.clientX - rect.left);
      setOffsetY(e.clientY - rect.top + 80);
      canvas.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    canvas?.current?.style && (canvas.current.style.left = newX + "px");
    canvas?.current?.style && (canvas.current.style.top = newY + "px");
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (canvas?.current) {
      canvas.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (canvas?.current) {
        canvas.current.style.cursor = "grab";
      }
    }
  };

  useEffect(() => {
    const canvasEL = canvas?.current;
    const fieldEL = fieldRef?.current;

    if (fieldEL) {
      fieldEL.addEventListener("wheel", handleMouseWheel);
    }

    if (canvasEL) {
      canvasEL.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      canvasEL?.removeEventListener("mousedown", handleMouseDown);
      fieldEL?.removeEventListener("wheel", handleMouseWheel);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [canvas?.current, isDragging]);

  const renderArrows = () => {
    return [...Array(4)].map((_, i) => (
      <button
        className={`canvas__arrow canvas__arrow_${i}`}
        onClick={() => onDirectionMove(i)}
        key={i}
      >
        <IconArrow />
      </button>
    ));
  };

  return (
    <div className='canvas' ref={fieldRef}>
      {renderArrows()}
      <div className='canvas__container' ref={canvas}>
        <Tree />
      </div>
    </div>
  );
};

export default DrawingCanvas;
