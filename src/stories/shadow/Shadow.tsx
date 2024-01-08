interface Props {
  type: string;
  colored: boolean;
}

export const Shadow = ({ type, colored }: Props) => {
  if (type === "Default") {
    if (colored) {
      return (
        <div className="w-[120px] h-[120px] bg-white rounded-xl shadow-md-color"></div>
      );
    } else {
      return (
        <div className="w-[120px] h-[120px] bg-white rounded-xl shadow-md"></div>
      );
    }
  } else if (type === "Large") {
    if (colored) {
      return (
        <div className="w-[120px] h-[120px] bg-white rounded-xl shadow-lg-color"></div>
      );
    } else {
      return (
        <div className="w-[120px] h-[120px] bg-white rounded-xl shadow-lg"></div>
      );
    }
  } else {
    return <div></div>;
  }
};
