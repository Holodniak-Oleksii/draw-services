import { useEffect, useState } from "react";
import { useGeneralContext } from "../../context/General";
import Tree from "../Tree/Tree";
import "./DrawingCanvas.scss";

const DrawingCanvas = () => {
  const { canvas, selectedZoom } = useGeneralContext();
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    const rect = canvas?.current?.getBoundingClientRect();
    if (rect) {
      setOffsetX(e.clientX - rect.left);
      setOffsetY(e.clientY - rect.top + 80);
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
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  useEffect(() => {
    const canvasEL = canvas?.current;
    if (canvasEL) {
      canvasEL.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      canvasEL?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [canvas?.current, selectedZoom, isDragging]);

  return (
    <div className='canvas'>
      <div className='canvas__container' ref={canvas}>
        <Tree />
      </div>
    </div>
  );
};

export default DrawingCanvas;
