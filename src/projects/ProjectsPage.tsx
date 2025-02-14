import allInOneArrayObject from "./MockProject";

type greetProps = {
  name: string;
  iswelcomed: string;
};

const StatisFunction: React.FC<greetProps> = (greetProps) => {
  return (
    <div>
      <h1>
        HELLO Gunjan it is 11 th feb and i am learning the react till this date
        and aim to become the full stack with it{" "}
      </h1>
      <pre>{JSON.stringify(allInOneArrayObject, null, " ")}</pre>
      <div>i am from props , {greetProps.name}</div>
    </div>
  );
};

export default StatisFunction;
