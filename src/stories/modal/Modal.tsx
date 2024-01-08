import { ReactComponent as Svg } from "../assets/info.svg";

interface Props {
  children?: string;
  type?: string;
  withIcon?: boolean;
  withButton?: boolean;
}

export const Modal = ({ children, type, withIcon, withButton }: Props) => {
  return (
    <div className="w-[270px] flex flex-col px-7 py-5 rounded-xl bg-white shadow">
      {withIcon && <Svg fill="#0D689E" />}
      <div className="mt-4 text-xl font-bold">Modal Title</div>
      <div className="text-gray-2 leading-6 mt-4 mb-3 font-extralight">
        {children}
      </div>
      {withButton && <Button children="Check" />}
    </div>
  );
};

const Button = ({ children }: { children: string }) => {
  return (
    <button className="self-center bg-main text-white cursor-pointer rounded-xl p-2 text-sm font-light">
      <span>{children}</span>
    </button>
  );
};
