import { Action, Store as ReduxStore, Dispatch } from "redux";
export enum SampleReactTypes {
  SAMPLE_REACT_TYPE = '@@types/SAMPLE_REACT_TYPE',
  SAMPLE_REACT_TYPE_ASYNC = '@@types/SAMPLE_REACT_TYPE_ASYNC'
}
export type Store = ReduxStore<SampleReactState, Action> & {
  dispatch: Dispatch;
};
export interface SampleReactState {
 data1?: Array<any>
}