const ComponentDemo = ({ children, title }: IProps) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <h4 className="text-lg mb-4 text-neutral-500">Preview component</h4>
      <div className="mb-4">{children}</div>
      <h4 className="text-lg mb-4 text-neutral-500">Props</h4>
    </div>
  );
};

interface IProps extends IComponent {
  title: string;
}

export default ComponentDemo;
