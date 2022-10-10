import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/AuthSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
