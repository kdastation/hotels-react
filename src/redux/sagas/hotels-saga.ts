import { put, call, takeEvery } from "redux-saga/effects";
import { HotelsApiService } from "../../service/api-service/hotels-api-service";
import { fetchHotelsError, fetchHotelsSuccess } from "../slices/hotels-slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { IParamsApiHotels } from "../../types/params-api-hotels";

function* getHotelsWorker(action: PayloadAction<IParamsApiHotels>) {
  try {
    // @ts-ignore
    const hotels = yield call(HotelsApiService.getHotels, action.payload);
    yield put(fetchHotelsSuccess(hotels));
  } catch {
    yield put(fetchHotelsError());
  }
}

export function* hotelsWatcher() {
  yield takeEvery("hotels/fetchHotels", getHotelsWorker);
}
