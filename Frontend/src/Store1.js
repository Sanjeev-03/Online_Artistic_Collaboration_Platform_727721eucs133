// import { configureStore } from "@reduxjs/toolkit";
// import masterReducer from "./Masterslice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "main-root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, masterReducer);

// export const Store1 = configureStore({
//   reducer: {
//     master: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(Store1);
