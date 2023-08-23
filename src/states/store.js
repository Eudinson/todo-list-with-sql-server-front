import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

import { rootSaga } from "./root-saga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

