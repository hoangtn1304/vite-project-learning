interface Props {
  children: string;
}

const Message = ({ children }: Props) => {
  return <h1>{children}</h1>;
};

export default Message;
