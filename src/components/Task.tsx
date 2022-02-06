import { FC, useState } from "react";
import { useSpring, animated, to } from "react-spring";
import styled from "styled-components";
import { COLORS } from "../theme/colors";
import { randomRgb } from "../utils/randomColor";

const Div = styled(animated.div)`
  background-color: ${COLORS.global.white};
`;

export const Task: FC<any> = ({ title, style }) => {
  const [animationEnd, setAnimationEnd] = useState(false);
  const { width, height } = useSpring({
    from: { width: 0, height: 0 },
    to: { width: 100, height: 50 },
    onResolve: () => setAnimationEnd(true),
  });

  return <Div style={{ width, height, ...style }}></Div>;
};
