import React from "react";

type ButtonProbs = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

const Button = ({ variant }: ButtonProbs) => {
  return <button className={`class-with-${variant}`}>Label</button>;
};

export default Button;
