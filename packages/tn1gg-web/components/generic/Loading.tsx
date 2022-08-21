import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center gap-2 text-neutral-200">
      <span className="h-6 w-6 block rounded-full border-4 border-t-neutral-600 animate-spin"></span>
      Loading...
    </div>
  );
};
