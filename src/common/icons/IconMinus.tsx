import * as React from "react";

function IconMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' {...props}>
      <path
        d='M5 12h14'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoIconMinus = React.memo(IconMinus);
export default MemoIconMinus;
