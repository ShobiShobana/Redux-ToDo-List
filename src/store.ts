
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./TodoSlice";

export const store = configureStore({
  reducer: todosReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;