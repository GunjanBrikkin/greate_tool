import StatisFunction from "../src/projects/ProjectsPage";
import Person from "../src/projects/person";
import UseOfHooks from "../src/projects/hooks_use_state";
import Button from "../src/projects/button";
import UseEffect from "../src/projects/useEffect";
import DropDown from "../src/projects/DropdownMenu";

function app() {
  return (
    <div className="pagecontext">
      <StatisFunction name="dhruv" iswelcomed="no" />
      <Person roseDay="yes" roseNight="definitely" />
      <UseOfHooks />
      <Button />
      <UseEffect />
      <DropDown />
    </div>
  );
}

export default app;
