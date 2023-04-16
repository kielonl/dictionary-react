import { twMerge } from "tailwind-merge";
import Typography from "../../Typography";

interface SemanticsProps {
  className?: string;
  semanticName: string;
  semantics: string[];
}

const Semantics: React.FC<SemanticsProps> = ({
  className,
  semanticName,
  semantics,
}) => {
  return (
    <div className={twMerge("flex flex-row gap-4 p-6", className)}>
      <Typography variant="headingS" className="text-grey">
        {semanticName}
      </Typography>
      <Typography variant="headingS">
        {semantics.map((semantic, index) => {
          return (
            <span
              className="text-purple hover:underline font-bold cursor-pointer"
              key={index}
            >
              {(index ? ", " : "") + semantic}
            </span>
          );
        })}
      </Typography>
    </div>
  );
};

export default Semantics;
