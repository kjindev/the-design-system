import { ReactComponent as Svg } from "../assets/addCircle.svg";

interface Props {
  type?: string;
  Destructive?: boolean;
  size?: "small" | "medium" | "large";
  children?: string;
}

export const Button = ({ type, size, Destructive, children }: Props) => {
  const fontSize = {
    small: 12,
    medium: 14,
    large: 18,
  };

  const style = "flex items-center cursor-pointer px-3 py-2 rounded-xl";
  const bgColor = Destructive ? "bg-gray-10" : "bg-main";
  const color = Destructive ? "text-gray-20" : "text-white";

  if (type === "WithIcon") {
    return (
      <button className={`${style} ${bgColor} ${color}`}>
        <Svg
          width={fontSize[size || "medium"] * 1.2}
          height={fontSize[size || "medium"] * 1.2}
          fill={Destructive ? "#8a8a8a" : "white"}
        />
        <span className="mb-[1px] ml-[1px]">{children}</span>
      </button>
    );
  } else if (type === "IconOnly") {
    return (
      <button className={`${style} ${bgColor} ${color}`}>
        <Svg
          width={fontSize[size || "medium"] * 1.5}
          height={fontSize[size || "medium"] * 1.5}
          fill={Destructive ? "#8a8a8a" : "white"}
        />
      </button>
    );
  } else {
    return (
      <div className={`${style} ${bgColor} ${color}`}>
        <span>{children}</span>
      </div>
    );
  }
};
