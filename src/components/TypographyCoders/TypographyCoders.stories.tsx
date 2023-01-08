import { ComponentMeta, ComponentStory } from "@storybook/react";
import TypographyCoders from "./TypographyCoders";

export default {
  component: TypographyCoders,
} as ComponentMeta<typeof TypographyCoders>;

const Template: ComponentStory<typeof TypographyCoders> = (args) => (
  <TypographyCoders {...args} />
);

export const TestHeading = { ...Template };

TestHeading.args = {
  variant: "h1",
  children: "Hello World",
  align: "center",
};
