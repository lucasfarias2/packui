const Media = ({ children }: IProps) => {
  return <div className="p-4 border rounded-lg bg-white">{children}</div>;
};

interface IProps {
  children?: React.ReactNode;
}

export default Media;
