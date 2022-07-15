import Card from "../components/Card"

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 2 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Card {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width:"auto",
          height:"auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "var(--bs-card-height)",
          borderColor: "red",
          borderRadius: "0.375rem",
          cardBg: "gray-100",
          marginBottom: "1.5rem",
          position: "relative",
          flexDirection: "column",
          backgroundColor: "#fff",
          backgroundClip: "border-box",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Card>
);

export const HorizontalWhite = Template.bind({})
HorizontalWhite.args = {
  direction: "row",
  spacing: 2,
  color:'white'
}

export const VerticalWhite = Template.bind({})
VerticalWhite.args = {
  direction: "column",
  spacing: 2,
  color:'white'
}

export const HorizontalBlack = Template.bind({})
HorizontalBlack.args = {
  direction: "row",
  spacing: 2,
  color:'black'
}


export const VerticalBlack = Template.bind({})
VerticalBlack.args = {
  direction: "column",
  spacing: 2,
  color:'black'
}