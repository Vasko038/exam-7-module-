import { configureStore } from "@reduxjs/toolkit";
import Page1Reducer from "./slices/Page1Slice";
import Page2Reducer from "./slices/Page2Slice";

const store = configureStore({
  reducer: {
    page1: Page1Reducer,
    page2: Page2Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
