import * as React from "react";

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' {...props}>
      <path
        d='M5 12l5 5L20 7'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoIconCheck = React.memo(IconCheck);
export default MemoIconCheck;
