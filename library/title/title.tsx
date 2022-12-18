const Title = ({ children, className, size, subtitle }: IProps) => {
  return <div>{children}</div>;
};

interface IProps extends IComponent {
  size?: 1 | 2 | 3 | 4 | 5;
  subtitle?: string;
}

export default Title;
