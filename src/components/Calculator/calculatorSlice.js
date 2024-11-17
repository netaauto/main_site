import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData } = calculatorSlice.actions

export default calculatorSlice.reducer