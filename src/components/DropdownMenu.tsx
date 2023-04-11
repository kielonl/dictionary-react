import * as Popover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

interface DropdownMenuProps {
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  className,
  trigger,
  children,
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={twMerge(
            "rounded-[16px] p-5 bg-white dark:bg-light-black text-darker-grey dark:text-white min-w-[100px] break-words shadow-dropdownLight dark:shadow-dropdownDark",
            className
          )}
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DropdownMenu;
