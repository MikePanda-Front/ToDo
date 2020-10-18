import { call, put, all, takeLatest } from "redux-saga/effects";

import { fetchEvents, updateEvent } from "../../Api";
import { SaveEvents, AddEvent } from "./actions";
import { IEvent, addEventRequest } from "./reducer";
import * as types from "./types";

function* getEvents() {
  try {
    const response: IEvent[] = yield call(fetchEvents);
    yield put(SaveEvents(response));
  } catch (err) {
    console.error("error", err);
  }
}

function* addEvents(action: addEventRequest) {
  try {
    yield call(updateEvent);
    yield put(AddEvent(action.payload));
  } catch (err) {
    console.error("error", err);
  }
}

export default function* saga() {
  yield all([takeLatest(types.FETCH_EVENTS, getEvents)]);
  yield all([takeLatest(types.ADD_EVENT_REQUEST, addEvents)]);
}
