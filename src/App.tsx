import StatisFunction from "../src/projects/ProjectsPage";
import Person from "../src/projects/person";
import UseOfHooks from "../src/projects/hooks_use_state";
import Button from "../src/projects/button";
import UseEffect from "../src/projects/useEffect";
import DropDown from "../src/projects/DropdownMenu";
import UseRefFunction from "../src/projects/useRef";
import UseRefFunction2 from "../src/projects/useRefExample2";
import UseReducer from "../src/projects/counter";
import { List } from "../src/projects/list";
import { RandomNumber } from "./projects/restrictions";
import Toast from "./projects/toast";
import "./App.css";
import ButtonStyle from "./projects/buttonStyle";
import Useprobsfromothertsx from "./projects/useprobsfromothertsx";

function app() {
  return (
    <div className="pagecontext">
      <StatisFunction name="dhruv" iswelcomed="no" />
      <Person roseDay="yes" roseNight="definitely" />
      <UseOfHooks />
      <Button />
      <UseEffect />
      <DropDown />
      <UseRefFunction />
      <UseRefFunction2 />
      <UseReducer />
      <List
        // items={["Batman", "Super man", "Iron man", "Gunjan"]}
        items={[
          {
            first: "Gunjan",
            last: "Hirani",
          },
          {
            first: "Yash",
            last: "Dhammal",
          },
        ]}
        onClick={(itam) => {
          console.log(itam);
        }}
      />
      {/* <RandomNumber
        value={1}
        isPositive={true}
        isNagative={false}
        isZero={true}
      /> */}

      <RandomNumber value={1} isPositive={true} />
      <Toast position="center" />
      <ButtonStyle variant="primary">Primary Button</ButtonStyle>
      <Useprobsfromothertsx />
    </div>
  );
}

export default app;
