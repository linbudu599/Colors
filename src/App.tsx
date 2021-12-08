import { FC } from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { Page, Grid, Card, Text } from "@geist-ui/react";
import styled from "styled-components";

import "./app.css";

interface IColorCardProps {
  color: string;
  title: string;
  description: string;
}

const StyledCard = styled(Card)<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? `${props.color}!important` : "inherit"};
`;

const StyledText = styled(Text)`
  color: #fff !important;
`;

const ColorCard: FC<IColorCardProps> = ({ color, title, description }) => {
  return (
    <StyledCard color={color} shadow width="100%">
      <StyledText small>{color}</StyledText>
      <StyledText>{title}</StyledText>
      <StyledText>{description}</StyledText>
    </StyledCard>
  );
};

const COLOR_COLLECTION: Array<IColorCardProps> = [
  {
    color: "#4682b4",
    title: "铁锈蓝",
    description: "纯净",
  },
  {
    color: "#ed4845",
    title: "淡寂红",
    description: "明媚",
  },
  {
    color: "#f9d27d",
    title: "麦芽糖黄",
    description: "温柔",
  },
  {
    color: "#8abcd1",
    title: "秋波蓝",
    description: "我也想你",
  },
  {
    color: "#248067",
    title: "森意绿",
    description: "森林",
  },
  {
    color: "#813c85",
    title: "桔梗紫",
    description: "笑意",
  },
  {
    color: "#c02c38",
    title: "高粱红",
    description: "热火",
  },

  {
    color: "#fed71a",
    title: "佛手黄",
    description: "灼目",
  },
  {
    color: "#0f59a4",
    title: "飞燕草蓝",
    description: "沉浸",
  },
  {
    color: "#83cbac",
    title: "粉绿",
    description: "娇嗔",
  },
  {
    color: "#3170a7",
    title: "安安蓝",
    description: "沉默",
  },
  {
    color: "#c04851",
    title: "玉红",
    description: "对视",
  },
];

function App() {
  return (
    <GeistProvider>
      <CssBaseline />

      <Page>
        <Page.Header>{/* <h1>Colors</h1> */}</Page.Header>
        <Page.Content>
          <h2>不知道什么颜色看起来高级？</h2>
          <p>
            来看看这里吧，可能你的心水款就在这里，就像我有多热爱{" "}
            <b className="steelblue">steelblue(#4682b4)</b> 一样。
          </p>
          <Grid.Container
            style={{
              marginTop: "20px",
            }}
            gap={4}
            justify="center"
            height="200px"
          >
            {COLOR_COLLECTION.map((item) => {
              return (
                <Grid xs={6} height="200px" width="100px">
                  <ColorCard {...item} />
                </Grid>
              );
            })}
          </Grid.Container>
        </Page.Content>
        {/* <Page.Footer>
          <h6>Author: @linbudu</h6>
        </Page.Footer> */}
      </Page>
    </GeistProvider>
  );
}

export default App;
