import { FC, useState } from "react";
import { useSpring, animated, to } from "react-spring";
import styled from "styled-components";
import { COLORS } from "../theme/colors";

const Button = styled(animated.button)`
  background-color: ${COLORS.global.button};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  font-size: 50px;
  font-weight: 900;
  font-color: ${COLORS.global.white};
`;

export const AddButton: FC<any> = ({ onClick }) => {
  //   const [animationEnd, setAnimationEnd] = useState(false);
  //   const { width, height } = useSpring({
  //     from: { width: 0, height: 0 },
  //     to: { width: 100, height: 50 },
  //     onResolve: () => setAnimationEnd(true),
  //   });

  return <Button onClick={onClick}>+</Button>;
};
