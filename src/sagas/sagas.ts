import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { SampleReactTypes } from '../redux/types';
import { getSampleContent } from './apis';
export function* sampleContentAsync() {
  const data = yield call(getSampleContent);
  yield put({type: SampleReactTypes.SAMPLE_REACT_TYPE_ASYNC, data})
}
function* watchSampleContent() {
  yield takeEvery(SampleReactTypes.SAMPLE_REACT_TYPE,         sampleContentAsync)
}
export default function* root() {
  yield fork(watchSampleContent);
}