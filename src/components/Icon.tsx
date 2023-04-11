interface IconProps {
  className?: string;
  stroke?: string;
}

const Search: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
    >
      <path
        fill="none"
        stroke="#A445ED"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
      />
    </svg>
  );
};

const DarkMode: React.FC<IconProps> = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
    >
      <path
        fill="none"
        stroke={stroke || "#838383"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 8"
    >
      <path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6" />
    </svg>
  );
};

const Icon = {
  Search,
  DarkMode,
  ArrowDown,
};

export default Icon;
