import { useState } from "react";

interface Props {
  children?: string;
  type?: string;
}

export const Tooltip = ({ children, type }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-[300px] h-[100px] flex justify-center items-center relative cursor-default"
      // css={css({
      //   "& .test": { cursor: "default" },
      //   "& .tooltip-hidden": {
      //     display: "none",
      //   },
      //   "& .tooltip": {
      //     position: "absolute",
      //     transform: "translate(60%, -80%)",
      //     fontSize: 12,
      //     backgroundColor: type === "DarkMode" ? mainColor : subColor2,
      //     color: type === "DarkMode" ? "white" : mainColor,
      //     padding: "10px 12px",
      //     borderRadius: 12,
      //   },
      // })}
    >
      <div
        className="test"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        Hover
      </div>
      <div
        className={
          isHover
            ? "translate-x-[60%] translate-y-[-80%] absolute px-3 py-2 rounded-xl bg-sub-2 text-main text-sm"
            : "hidden"
        }
      >
        {children}
      </div>
    </div>
  );
};
