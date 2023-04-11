import { twMerge } from "tailwind-merge";
import Icon from "./Icon";

interface TextFieldProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type"
  > {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  icon,
  className,
  ...props
}) => {
  const renderIcon = () => {
    if (!icon) return null;

    return (
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-3 focus:ring-4 focus:outline-none focus:ring-purple font-medium rounded-lg text-sm px-4 py-2"
      >
        <Icon.Search />
      </button>
    );
  };

  return (
    <div className="relative">
      <input
        type="text"
        className={twMerge(
          "block w-full p-3 text-[20px] font-sans font-bold text-darker-grey text-darkey-grey/25 dark:placeholder:text-white/25 rounded-[16px] focus:outline-[1px] focus:outline-purple bg-lighter-grey dark:bg-light-black dark:text-white",
          error && "border-2 border-red outline-none",
          className
        )}
        {...props}
      />
      {renderIcon()}
    </div>
  );
};

export default TextField;
