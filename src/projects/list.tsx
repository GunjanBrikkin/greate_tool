type ListProbs<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends object>({ items, onClick }: ListProbs<T>) => {
  return (
    <div>
      <h2>List of Iteams</h2>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              onClick(item);
            }}
          >
            {index} "goes to "{JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
};
