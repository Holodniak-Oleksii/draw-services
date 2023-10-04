import * as React from "react";

function IconPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' {...props}>
      <path
        d='M12 5v14M5 12h14'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoIconPlus = React.memo(IconPlus);
export default MemoIconPlus;
