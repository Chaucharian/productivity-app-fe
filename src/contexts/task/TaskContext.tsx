import { createContext, FC, useContext, useMemo, useReducer } from "react";
import { actions, reducer } from "./reducer";

const TaskContext = createContext({});

interface State {
  tasks: any[];
}

const initialState: State = {
  tasks: [],
};

export const TaskProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stateActions = useMemo(
    () => ({
      createTask: (payload: any) => dispatch(actions.create(payload)),
      updateTask: (payload: any) => dispatch(actions.update(payload)),
      deleteTask: (payload: any) => dispatch(actions.delete(payload)),
    }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      ...stateActions,
    }),
    [state, stateActions]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask: any = () => useContext(TaskContext);
