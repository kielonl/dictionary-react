import FontToggler from "../FontToggler";
import Icon from "../Icon";
import ThemeToggler from "../ThemeToggler";

const UpperBar = () => {
  return (
    <div className="flex flex-row justify-center items-center pt-5">
      <Icon.Logo />
      <div className="flex-1"></div>
      <FontToggler className="border-r-[1px] pr-4" />
      <ThemeToggler />
    </div>
  );
};

export default UpperBar;
