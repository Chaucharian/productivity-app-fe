import { TaskProvider } from "./contexts/task/TaskContext";
import { Dashboard } from "./screens/dashboard/Dashboard";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TaskProvider>
        <Dashboard />
      </TaskProvider>
    </>
  );
}

export default App;
