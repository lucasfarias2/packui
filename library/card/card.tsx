const Card = ({ children, className }: IComponent) => {
  return <div className={`p-4 border rounded-lg bg-white ${className}`}>{children}</div>;
};

export default Card;
