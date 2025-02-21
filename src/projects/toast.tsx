type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type TostProbs = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: TostProbs) => {
  return (
    <div>
      <button>Toast notification position - {position}</button>
    </div>
  );
};

export default Toast;
