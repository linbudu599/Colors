import { FC } from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { Page, Grid, Card, Text, Link, useToasts } from "@geist-ui/react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import rgb2hex from "rgb2hex";

import { IColorItem, COLOR_COLLECTION } from "./colors";

interface IColorCardProps extends IColorItem {}

const StyledCard = styled(Card)<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? `${props.color}!important` : "inherit"};

  min-height: 100px;
`;

const StyledText = styled(Text)`
  color: #fff !important;

  display: none;

  @media (min-width: 750px) {
    display: inherit;
  }
`;

const ColorCard: FC<IColorCardProps> = ({ color, title, description }) => {
  const [, setToast] = useToasts();

  return (
    <CopyToClipboard
      text={color}
      onCopy={() => {
        setToast({
          text: `Color ${color} copied.`,
          delay: 5000,
        });
      }}
    >
      <StyledCard color={color} shadow width="100%">
        <StyledText small>{color}</StyledText>
        <StyledText>{title}</StyledText>
        <StyledText>{description}</StyledText>
      </StyledCard>
    </CopyToClipboard>
  );
};

const StyledSteelblue = styled.b`
  color: steelblue;
  font-size: 18px;
`;

const { Content, Footer } = Page;

const StyledPageFooter = styled(Footer)`
  display: none;

  @media (min-width: 750px) {
    position: fixed !important;
    display: inherit;
  }
`;

function App() {
  return (
    <GeistProvider>
      <CssBaseline />

      <Page>
        <Content>
          <h2>不知道什么颜色看起来「高级」？</h2>
          <p>
            来看看这里吧，可能你的心水款就在这里，就像我有多热爱{" "}
            <StyledSteelblue>steelblue(#4682b4)</StyledSteelblue> 一样。
          </p>
          <Grid.Container
            style={{
              marginTop: "20px",
            }}
            gap={4}
            justify="center"
          >
            {COLOR_COLLECTION.map((item) => {
              return (
                <Grid key={item.color} xs={6}>
                  <ColorCard
                    color={
                      item.color.startsWith("#")
                        ? item.color
                        : rgb2hex(item.color).hex
                    }
                    title={item.title}
                    description={item.description}
                  />
                </Grid>
              );
            })}
          </Grid.Container>
        </Content>
        <StyledPageFooter>
          <h5>
            <Link href="https://github.com/linbudu599" target="_blank">
              By @linbudu
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.zhihu.com/question/497851000"
              target="_blank"
            >
              来自知乎问题：除了克莱因蓝，还有哪些颜色很高级?
            </Link>
          </h5>
        </StyledPageFooter>
      </Page>
    </GeistProvider>
  );
}

export default App;
