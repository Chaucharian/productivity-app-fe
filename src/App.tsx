import { TaskProvider } from "./contexts/task/TaskContext";
import { Dashboard } from "./screens/dashboard/Dashboard";

function App() {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
}

export default App;
