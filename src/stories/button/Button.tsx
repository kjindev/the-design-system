import { ReactComponent as Svg } from "../assets/addCircle.svg";

interface Props {
  type?: string;
  Destructive?: boolean;
  size: "small" | "medium" | "large";
  children?: string;
}

export const Button = ({ type, size, Destructive, children }: Props) => {
  const fontSize = {
    small: "text-xs",
    medium: "text-base",
    large: "text-xl",
  };

  const svgSize = {
    small: 12,
    medium: 14,
    large: 18,
  };

  const style = "flex items-center cursor-pointer px-3 py-2 rounded-xl";
  const bgColor = Destructive ? "bg-gray-1" : "bg-main";
  const color = Destructive ? "text-gray-2" : "text-white";

  if (type === "WithIcon") {
    return (
      <button className={`${style} ${bgColor} ${color} ${fontSize[size]}`}>
        <Svg
          width={svgSize[size] * 1.2}
          height={svgSize[size] * 1.2}
          fill={Destructive ? "#8a8a8a" : "white"}
        />
        <span className="pl-1">{children}</span>
      </button>
    );
  } else if (type === "IconOnly") {
    return (
      <button className={`${style} ${bgColor} ${color} ${fontSize[size]}`}>
        <Svg
          width={svgSize[size] * 1.2}
          height={svgSize[size] * 1.2}
          fill={Destructive ? "#8a8a8a" : "white"}
        />
      </button>
    );
  } else {
    return (
      <div className={`${style} ${bgColor} ${color} ${fontSize[size]}`}>
        <span>{children}</span>
      </div>
    );
  }
};
