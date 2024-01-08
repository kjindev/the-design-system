interface Props {
  children?: string;
}

export const Link = ({ children }: Props) => {
  return (
    <div className="cursor-pointer text-main hover:text-sub-2">{children}</div>
  );
};
