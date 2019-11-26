import { SampleReactState, SampleReactTypes } from "./types";
import { AnyAction } from "redux";
const initialState = {
data1: undefined
};
const SampleReducer = (currentState: SampleReactState = initialState, action: AnyAction) => {
switch (action.type) {
   case SampleReactTypes.SAMPLE_REACT_TYPE_ASYNC:
      return getSampleContentReducer(currentState, action);
   default:
      return currentState;
 }
};
function getSampleContentReducer(currentState: SampleReactState, action: AnyAction) {
  const data = action.payload || action.data;
  return Object.assign({}, currentState, { data1: data });
}
export default SampleReducer;