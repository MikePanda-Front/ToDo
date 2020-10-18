import { all } from "redux-saga/effects";

import eventsSaga from "../Ducks/Events/sagas";

export default function* rootSaga() {
  return yield all([eventsSaga()]);
}
