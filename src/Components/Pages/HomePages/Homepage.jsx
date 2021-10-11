import React from "react";
import Homehero from "../../Pages/Homehero/Homehero.jsx";
import { homeObjone, homeObjTwo, homeObjThree, homeObjFour } from "./Data.jsx";
import Pricing from "../../Pricing/Pricing.jsx";
function Data() {
  return (
    <div>
      <Homehero {...homeObjone} />
      <Homehero {...homeObjTwo} />
      <Homehero {...homeObjThree} />
      <Pricing />
      <Homehero {...homeObjFour} />
    </div>
  );
}

export default Data;
