import React from "react";
import Homehero from "../../Pages/Homehero/Homehero.jsx";
import { homeObjone } from "./Data.jsx";
function Data() {
  return (
    <div>
      <Homehero {...homeObjone} />
    </div>
  );
}

export default Data;
