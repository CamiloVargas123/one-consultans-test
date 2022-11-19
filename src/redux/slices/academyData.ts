import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataAcademy, EmptyDataAcademyState } from 'src/models/dataAcademic.type';
import { RootState } from '../store';

export const academyData = createSlice({
  name: 'academyData',
  initialState: EmptyDataAcademyState,
  reducers: {
    saveAcademyData: (_, action: PayloadAction<DataAcademy>) => {
      return action.payload;
    },
    modifyAcademyData: (state, action: PayloadAction<DataAcademy>) => {
      return { ...state, ...action.payload }
    },
    resetAcademyData: () => {
      return EmptyDataAcademyState
    }
  }
})

export const { saveAcademyData, modifyAcademyData, resetAcademyData } = academyData.actions;
export const selectAcademyData = (state: RootState) => state.academyData
export default academyData.reducer;