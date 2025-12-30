import { useState } from "react";
import Counter from "./Counter";
import ToggleText from "./ToggleText";
import ButtonTextChange from "./ButtonTextChange";
import LiveInput from "./LiveInput";

function PracticalTask() {
  return (
    <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min bg-gray-100 p-2">
      <Counter />
      <ToggleText />
      <ButtonTextChange />
      <LiveInput />
    </div>
  );
}

export default PracticalTask;
