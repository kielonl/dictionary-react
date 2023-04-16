import Typography from "../../Typography";

interface WordSectionProps {
  className?: string;
  name: string;
  children?: React.ReactNode;
}

const WordSection: React.FC<WordSectionProps> = ({
  className,
  name,
  children,
}) => {
  return (
    <div className={className}>
      <div className="flex flex-row justify-center items-center">
        <Typography variant="headingM" className="italic font-bold relative">
          {name}
        </Typography>
        <div className="block h-[1px] w-[95%] ml-6 bg-light-grey dark:bg-dark-grey rounded"></div>
      </div>

      {children}
    </div>
  );
};

export default WordSection;
