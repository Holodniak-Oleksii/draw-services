import * as React from "react";

function IconArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' {...props}>
      <path
        d='M9 6l6 6-6 6'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoIconArrow = React.memo(IconArrow);
export default MemoIconArrow;
