type typingpractice = {
  roseDay: string;
  roseNight: string;
};

const personList = (props: typingpractice) => {
  return <div>{props.roseDay}</div>;
};

export default personList;
