import { useTask } from "../../contexts/task/TaskContext";

export const Dashboard = () => {
  const { tasks, createTask } = useTask();

  return (
    <div>
      {tasks.map((task: any) => (
        <div style={{ backgroundColor: "grey" }}>
          <h1>{task?.title}</h1>
        </div>
      ))}
      <button onClick={() => createTask({ title: "TESTING " })}>ADD</button>
    </div>
  );
};
