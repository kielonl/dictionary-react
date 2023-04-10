import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "./Icon";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-row  items-center m-2">
      <label className="relative inline-flex items-center cursor-pointers gap-2">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div
          className={classNames(
            "w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[21px]  after:content-[''] after:absolute after:top-[5.5px] after:left-[5px] after:bg-white after:border-gray-300 after:rounded-full after:h-3 after:w-3 after:transition-all",
            theme === "dark" ? "bg-purple" : "bg-grey"
          )}
        ></div>
        <Icon.DarkMode stroke={theme === "dark" ? "#A445ED" : ""} />
      </label>
    </div>
  );
};

export default ThemeToggler;
