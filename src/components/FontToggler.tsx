import { useContext } from "react";
import { Font } from "../constants";
import { FontContext } from "../contexts/FontContext";
import DropdownMenu from "./DropdownMenu";
import Icon from "./Icon";
import Typography from "./Typography";

interface FontTogglerProps {
  className?: string;
}

const FontToggler: React.FC<FontTogglerProps> = ({ className }) => {
  const { font, setFont } = useContext(FontContext);
  const FontKeys = Object.keys(Font) as Font[];

  return (
    <div className={className}>
      <DropdownMenu
        trigger={
          <Typography
            font={font}
            className="capitalize flex flex-row justify-center items-center gap-4"
          >
            {font} <Icon.ArrowDown />
          </Typography>
        }
      >
        {FontKeys.map((font) => {
          return (
            <Typography
              font={font}
              key={font}
              className="capitalize cursor-pointer hover:text-purple font-bold"
              onClick={() => setFont(font)}
            >
              {font}
            </Typography>
          );
        })}
      </DropdownMenu>
    </div>
  );
};
export default FontToggler;
