
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataPersonal, EmptyDataPerosnalState } from 'src/models/dataPersonal.type';
import { RootState } from '../store';

export const personalData = createSlice({
  name: 'personalData',
  initialState: EmptyDataPerosnalState,
  reducers: {
    savePersonalData: (_, action: PayloadAction<DataPersonal>) => {
      return action.payload;
    },
    modifyPersonalData: (state, action: PayloadAction<DataPersonal>) => {
      return { ...state, ...action.payload }
    },
    resetPerosnalData: () => {
      return EmptyDataPerosnalState
    }
  }
})

export const { savePersonalData, modifyPersonalData, resetPerosnalData } = personalData.actions;
export const selectPersonalData = (state: RootState) => state.personalData
export default personalData.reducer;