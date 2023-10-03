import * as React from "react";

function IconFocusCentered(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' {...props}>
      <path
        d='M12 13a1 1 0 100-2 1 1 0 000 2zM4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoIconFocusCentered = React.memo(IconFocusCentered);
export default MemoIconFocusCentered;
