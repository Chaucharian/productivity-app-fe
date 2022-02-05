enum ACTION_TYPES {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export const actions = {
  create: (payload: any) => ({ type: ACTION_TYPES.CREATE, payload }),
  update: (payload: any) => ({ type: ACTION_TYPES.UPDATE, payload }),
  delete: (payload: any) => ({ type: ACTION_TYPES.DELETE, payload }),
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE: {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case ACTION_TYPES.UPDATE: {
      return;
    }
    case ACTION_TYPES.DELETE: {
      return;
    }
  }
};
