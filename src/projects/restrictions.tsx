type RnadomNumberProps = isPositiveType | isNagative | isZero;

type randomeNumerType = {
  value: number;
};

type isPositiveType = randomeNumerType & {
  isPositive: boolean;
  isNagative?: never;
  isZero?: never;
};

type isNagative = randomeNumerType & {
  isPositive?: never;
  isNagative: boolean;
  isZero?: never;
};

type isZero = randomeNumerType & {
  isPositive?: never;
  isNagative?: never;
  isZero: boolean;
};

export const RandomNumber = ({
  value,
  isPositive,
  isNagative,
  isZero,
}: RnadomNumberProps) => {
  return (
    <div>
      {value}
      {isPositive && "positive"}
      {isNagative && "negative"}
      {isZero && "zero"}
    </div>
  );
};
