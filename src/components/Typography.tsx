import { twMerge } from "tailwind-merge";

type Variant = "headingL" | "headingM" | "headingS" | "bodyM" | "bodyS" | "div";
type Component = "h1" | "h2" | "h3" | "p" | "div";
type Font = "sans" | "serif" | "mono";

interface TypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  variant?: Variant;
  font?: Font;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "div",
  font = "sans",
  className,
  children,
  ...props
}) => {
  const variants: Record<Variant, Component> = {
    headingL: "h1",
    headingM: "h2",
    headingS: "h3",
    bodyM: "p",
    bodyS: "p",
    div: "div",
  };

  const fonts: Record<Font, string> = {
    sans: "font-sansSerif ",
    serif: "font-serif ",
    mono: "font-mono ",
  };

  const fontClass = fonts[font.toLowerCase() as Font];

  const variantClasses: Record<Variant, string> = {
    headingL: fontClass + "text-[32px] sm:text-[64px] font-bold leading-[77px]",
    headingM: fontClass + "text=[18px] sm:text-[24px] leading-[29px]",
    headingS: fontClass + "text-[20px] leading-[24px]",
    bodyM: fontClass + "text-[18px] leading-[24px]",
    bodyS: fontClass + "text-[14px] leading-[17px]",
    div: fontClass + "text-[18px] leading-[24px]",
  };

  const classes = twMerge(variantClasses[variant], className);

  const Component = variants[variant];
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
