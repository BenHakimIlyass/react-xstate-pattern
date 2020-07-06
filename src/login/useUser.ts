import { useMachine } from "@xstate/react";
import machine from "./machine";
import axios from "axios";

export default () => {
  const [state, send] = useMachine(machine, {
    actions: {
      load: () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
          send({ type: "RESOLVE", user: res.data[2].name });
        });
      }
    }
  });
  const value = state.value;
  return [
    state.context.user,
    { loading: value === "loading", success: value === "success" },
    () => send("GET_USER")
  ];
};
