import { createStore, applyMiddleware } from "redux";
import JobsApplicationReducer from "../redux/reducer";
import createSagaMiddleware, { END } from "redux-saga";
import root from "../sagas/sagas";
import { SampleReactState } from "../redux/types";
const makeStore: any = (initialState: SampleReactState) => {
const sagaMiddleware = createSagaMiddleware();
const store: any = createStore(
   JobsApplicationReducer,
   initialState,
   applyMiddleware(sagaMiddleware)
);
store.sagaTask = sagaMiddleware.run(root);
return store;
};
export default makeStore;