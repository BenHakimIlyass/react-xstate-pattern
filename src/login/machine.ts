import { assign, Machine } from "xstate";

const context = {
  user: ""
};
interface States {
  states: {
    idle: {};
    pending: {};
    success: {};
  };
}
interface FetchContext {
  user: string;
}
const loginMachine = Machine<States, FetchContext>({
  id: "login",
  initial: "idle",
  context,
  states: {
    idle: {
      on: { GET_USER: "loading" }
    },
    loading: {
      entry: ["load"],
      on: {
        RESOLVE: {
          target: "success",
          actions: assign({
            user: (context, event: any) => event.user
          })
        }
      }
    },
    success: {}
  }
});
export default loginMachine;
