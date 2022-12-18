const Media = ({ className, children, leftContent }: IProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="p-2">{leftContent}</div>
      <div className="p-2 flex-1">{children}</div>
    </div>
  );
};

interface IProps extends IComponent {
  leftContent: React.ReactNode;
}

export default Media;
