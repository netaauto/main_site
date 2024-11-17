import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const joinusSlice = createSlice({
  name: 'joinus',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = joinusSlice.actions

export default joinusSlice.reducer