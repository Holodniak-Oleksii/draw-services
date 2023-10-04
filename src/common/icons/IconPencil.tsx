import * as React from "react";

function IconPencil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' {...props}>
      <path
        d='M18.818 8.61l-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829L18.818 8.61zm-1.414 1.415l-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9 3.536 3.536z'
        fill='#fff'
      />
    </svg>
  );
}

const MemoIconPencil = React.memo(IconPencil);
export default MemoIconPencil;
