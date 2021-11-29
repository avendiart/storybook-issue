import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = ({}: ButtonProps) => (
  <Button>Hello</Button>
);
