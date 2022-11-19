
import { combineReducers } from '@reduxjs/toolkit';
import { default as personalData } from './personalData'
import { default as academyData } from './academyData'

const rootReducer = combineReducers({
  personalData,
  academyData
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;