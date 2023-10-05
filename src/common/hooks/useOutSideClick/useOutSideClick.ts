import { useEffect } from "react";

import { TOutsideClick } from "./types";

export const useOutSideClick: TOutsideClick = (refs, handler) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!handler) return;

      if (
        event.target === document.getElementsByTagName("html")[0] &&
        event.clientX >= document.documentElement.offsetWidth
      )
        return;

      let containedToAnyRefs = false;
      if (!refs) return;
      for (const rf of refs) {
        if (rf && rf.current && rf.current.contains(event.target as Node)) {
          containedToAnyRefs = true;
          break;
        }
      }
      if (!containedToAnyRefs) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler]);
};
