import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const familySlice = createSlice({
  name: 'family',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = familySlice.actions

export default familySlice.reducer