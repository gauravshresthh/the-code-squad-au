import Image from "next/image";
import React from "react";

import { ReactNode } from "react";

export default function Pills({ children }: { children: ReactNode }) {
  return (
    <div className="border rounded-full mb-5 px-4 py-1 bg-[#f5f6f9] text-secondary border-[#d8d8db] flex items-center gap-2 text-xs sm:text-sm lg:text-base w-fit">
      <Image src="/icons/pointer.svg" alt="pointer" width={15} height={15} />
      {children}
    </div>
  );
}
