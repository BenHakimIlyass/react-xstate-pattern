import { useMachine } from "@xstate/react";
import machine from "./machine";
import axios from "axios";

export default () => {
  const [state, send] = useMachine(machine, {
    actions: {
      load: () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res => {
          send({ type: "RESOLVE", list: res.data });
        });
      }
    }
  });
  const value = state.value;
  return [
    state.context.list,
    { loading: value === "loading", success: value === "success" },
    () => send("GET_TODOS")
  ];
};
