import { createContext } from "react";
import Childre from "../projects/child";

const Data1 = createContext<string | null>(null);
const Data2 = createContext<string | null>(null);

const DemoOfDrilling = () => {
  const name: string = "Gunjan";
  const GOAT: string = "true";

  return (
    <Data1.Provider value={name}>
      <Data2.Provider value={GOAT}>
        <Childre />
      </Data2.Provider>
    </Data1.Provider>
  );
};

export default DemoOfDrilling;
export { Data1, Data2 };
