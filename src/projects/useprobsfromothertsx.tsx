import projectProbs from "./ProjectsPage";

const CustomeComponent = (probs: React.ComponentProps<typeof projectProbs>) => {
  console.log("Received props:", probs);
  return <div>This is {probs.iswelcomed}</div>;
};

export default CustomeComponent;
