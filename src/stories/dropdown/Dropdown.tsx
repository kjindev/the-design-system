import { useState } from "react";
import { ReactComponent as Svg } from "../assets/expand.svg";
import { ReactComponent as Svg2 } from "../assets/expand_less.svg";

interface Props {
  type?: string;
  withIcon?: boolean;
}

export const Dropdown = ({ type, withIcon }: Props) => {
  const arrayLength = 4;
  const [isHover, setIsHover] = useState(false);

  if (type === "Destructive") {
    return (
      <div className="text-sm h-[300px] flex items-center relative">
        <div id="selectBox">
          <div
            id="label"
            className="w-[150px] bg-gray-1 text-gray-2 px-3 py-2  rounded-lg "
          >
            <div className="flex justify-between items-cetner">
              <div>Select Here</div>
              {withIcon && (
                <div className="flex items-center">
                  <Svg fill="#8a8a8a" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-sm h-[300px] flex items-center relative">
        <div id="selectBox">
          <div
            id="label"
            className={`w-[150px] bg-sub-2 px-3 py-2 hover:cursor-pointer ${
              isHover ? " rounded-t-lg" : "rounded-lg"
            }`}
            onClick={() => setIsHover(!isHover)}
          >
            <div className="flex justify-between items-cetner">
              <div>Select Here</div>
              {withIcon && (
                <div className="flex items-center">
                  {isHover ? <Svg2 /> : <Svg />}
                </div>
              )}
            </div>
          </div>
          <div className={isHover ? "absolute" : "hidden"}>
            {Array.from({ length: arrayLength }).map((_, index) => (
              <div
                key={index}
                id="optionItem"
                className={
                  index + 1 === arrayLength
                    ? "hover:bg-slate-100 hover:cursor-pointer w-[150px] bg-slate-200 p-2 rounded-b-lg"
                    : "hover:bg-slate-100 hover:cursor-pointer w-[150px] bg-slate-200 p-2"
                }
              >
                option{index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
