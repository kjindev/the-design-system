import { ReactComponent as Svg } from "../assets/cancel.svg";
interface Props {
  type?: string;
  children?: string;
  withButton?: boolean;
}

export const Alert = ({ type, withButton, children }: Props) => {
  const style =
    "w-[300px] flex justify-between items-center px-3 py-2 rounded-lg";
  // const style = {
  //   width: "300px",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   border: "none",
  //   fontSize: 14,
  //   padding: 14,
  //   borderRadius: 14,
  //   fontFamily: "Noto Sans KR",
  //   fontWeight: "400",
  //   "&:hover": {
  //     // transform: "scale(1.05)",
  //   },
  // };

  if (type === "Error") {
    return (
      <div className={`${style} bg-red-1 text-red-2`}>
        {children}
        {withButton && <Svg fill="#ff5a57" />}
      </div>
    );
  } else {
    return (
      <div className={`${style} bg-sub-2 text-main`}>
        {children}
        {withButton && <Svg fill="#0D689E" />}
      </div>
    );
  }
};
