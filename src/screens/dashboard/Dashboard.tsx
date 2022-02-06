import { Task } from "../../components/Task";
import { useTask } from "../../contexts/task/TaskContext";
import styled from "styled-components";
import { COLORS } from "../../theme/colors";
import { AddButton } from "../../components/AddButtton";
import { randomRgb } from "../../utils/randomColor";

const Container = styled.div`
  background-color: ${COLORS.global.blue};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  //   background-color: ${COLORS.global.white};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Dashboard = () => {
  const { tasks, createTask } = useTask();

  return (
    <Container>
      <Section>
        {tasks.map((task: any, index: number) => (
          <Task key={index} {...task} />
        ))}
        <AddButton
          onClick={() =>
            createTask({
              title: "TESTING",
              style: { backgroundColor: randomRgb() },
            })
          }
        />
      </Section>
    </Container>
  );
};
