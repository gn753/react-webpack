import React, { useState } from "react";
import SortOptionList from "./SortOptionList";

const SortOptionContainer = () => {
  const [newsCurOption, setNewsCurOption] = useState<String>("정렬순");
  return (
    <SortOptionList
      newsCurOption={newsCurOption}
      setNewsCurOption={setNewsCurOption}
    />
  );
};

export default SortOptionContainer;
