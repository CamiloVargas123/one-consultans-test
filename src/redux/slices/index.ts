
import { combineReducers } from '@reduxjs/toolkit';
import { default as personalData } from './personalData'

const rootReducer = combineReducers({
  personalData
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;