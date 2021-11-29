export type ButtonsProps = {
  buttons: Array<JSX.Element>;
};

export const Buttons = ({ buttons }: ButtonsProps) => {
  return <div>{buttons}</div>;
};
