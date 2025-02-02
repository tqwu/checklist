"use client";

import Checklist from "@/components/checklist";
import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <div className="grid gap-5 p-5">
      <Checklist />
      <Calculator />
    </div>
  );
}
