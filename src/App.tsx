import StatisFunction from "../src/projects/ProjectsPage";
import Person from "../src/projects/person";
import UseOfHooks from "../src/projects/hooks_use_state";
import Button from "../src/projects/button";
import UseEffect from "../src/projects/useEffect";
import DropDown from "../src/projects/DropdownMenu";
import UseRefFunction from "../src/projects/useRef";
import UseRefFunction2 from "../src/projects/useRefExample2";
import UseReducer from "../src/projects/counter";

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
    </div>
  );
}

export default app;
