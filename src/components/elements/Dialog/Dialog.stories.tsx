import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import { BUTTON_VARIANT, COMPONENT_SIZE } from "@/constants/ParamConst";
import { Button } from "@/components";
import { kosugiMaru } from "@/app/layout";

const meta = {
  title: "Elements/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MinHeight: Story = {
  args: {
    children: (
      <Button variant={BUTTON_VARIANT.PRIMARY} size={COMPONENT_SIZE.MEDIUM}>
        開く
      </Button>
    ),
    description: (
      <div
        style={{ fontFamily: kosugiMaru.style.fontFamily, color: "#555555" }}
      >
        <h3>ダイアログです。</h3>
        <p>コンテンツ1</p>
        <p>コンテンツ2</p>
        <p>コンテンツ3</p>
      </div>
    ),
  },
};

export const MaxHeight: Story = {
  args: {
    children: (
      <Button variant={BUTTON_VARIANT.PRIMARY} size={COMPONENT_SIZE.MEDIUM}>
        開く
      </Button>
    ),
    description: (
      <div
        style={{ fontFamily: kosugiMaru.style.fontFamily, color: "#555555" }}
      >
        <h3>ダイアログです。</h3>
        <p>コンテンツ1</p>
        <p>コンテンツ2</p>
        <p>コンテンツ3</p>
        <p>コンテンツ4</p>
        <p>コンテンツ5</p>
        <p>コンテンツ6</p>
        <p>コンテンツ7</p>
        <p>コンテンツ8</p>
        <p>コンテンツ9</p>
        <p>コンテンツ10</p>
        <p>コンテンツ11</p>
        <p>コンテンツ12</p>
        <p>コンテンツ13</p>
        <p>コンテンツ14</p>
        <p>コンテンツ15</p>
        <p>コンテンツ16</p>
        <p>コンテンツ17</p>
        <p>コンテンツ18</p>
        <p>コンテンツ19</p>
        <p>コンテンツ20</p>
        <p>コンテンツ21</p>
        <p>コンテンツ22</p>
        <p>コンテンツ23</p>
        <p>コンテンツ24</p>
        <p>コンテンツ25</p>
        <p>コンテンツ26</p>
        <p>コンテンツ27</p>
        <p>コンテンツ28</p>
        <p>コンテンツ29</p>
        <p>コンテンツ30</p>
      </div>
    ),
  },
};
