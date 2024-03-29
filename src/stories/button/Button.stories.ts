import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    controls: { exclude: ["children", "type"] },
    layout: "centered",
    componentSubtitle:
      "Button은 사용자와의 상호작용을 유도하고, 특정 액션을 트리거하기 위해 사용하는 컴포넌트입니다.",
  },
  argTypes: {
    size: {
      description: "Button의 크기를 결정합니다.",
      table: {
        defaultValue: { summary: "small" },
      },
      defaultValue: "small",
    },
    Destructive: {
      description: "Button의 사용 가능 여부를 결정합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
  },
  args: {
    size: "small",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    Destructive: false,
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    type: "WithIcon",
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    type: "IconOnly",
  },
};
