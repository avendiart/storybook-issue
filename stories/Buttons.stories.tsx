import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import { Buttons, ButtonsProps } from "./Buttons";

export default {
  title: "Components/Buttons",
  component: Buttons,
} as Meta<ButtonsProps>;

export const Default: Story<ButtonsProps> = ({}: ButtonsProps) => (
  <Buttons
    buttons={[<Button key="1">Hello</Button>, <Button key="2">Hello</Button>]}
  />
);
