import { ReactComponent as Svg } from "../assets/addCircle.svg";

interface Props {
  children?: string;
  type?: string;
}

export const Label = ({ type, children }: Props) => {
  return (
    <div className="flex items-center text-sm px-3 py-2 rounded-xl bg-sub-2 text-main">
      {type === "WithIcon" && <Svg width={12} height={12} fill="#0D689E" />}
      <span className={type === "WithIcon" ? "pl-1" : ""}>{children}</span>
    </div>
  );
};
