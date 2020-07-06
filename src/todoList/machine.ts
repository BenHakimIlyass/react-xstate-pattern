import { assign, Machine } from "xstate";

const context = {
  list: []
};
interface States {
  states: {
    idle: {};
    pending: {};
    success: {};
  };
}
interface FetchContext {
  list: [];
}
const loginMachine = Machine<States, FetchContext>({
  id: "todoList",
  initial: "idle",
  context,
  states: {
    idle: {
      on: { GET_TODOS: "loading" }
    },
    loading: {
      entry: ["load"],
      on: {
        RESOLVE: {
          target: "success",
          actions: assign({
            list: (context, event: any) => event.list
          })
        }
      }
    },
    success: {}
  }
});
export default loginMachine;
