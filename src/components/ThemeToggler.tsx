import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "./Icon";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-row items-center m-2 w-fit">
      <label className="relative inline-flex items-center cursor-pointer gap-2">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div
          className={classNames(
            "w-10 h-5 transition-bg duration-150 ease-in hover:bg-purple peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[19.5px]  after:content-[''] after:absolute after:top-[3px] after:left-[3.5px] after:bg-white after:border-gray-300 after:rounded-full after:h-[.85rem] after:w-[.85rem] after:transition-all",
            theme === "dark" ? "bg-purple" : "bg-grey"
          )}
        ></div>
        <Icon.DarkMode stroke={theme === "dark" ? "#A445ED" : ""} />
      </label>
    </div>
  );
};

export default ThemeToggler;
