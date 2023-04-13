import Typography from "../../Typography";

interface ExampleProps {
  example: string;
}

const Example: React.FC<ExampleProps> = ({ example }) => {
  return <Typography className="text-grey m-4">"{example}"</Typography>;
};

export default Example;
