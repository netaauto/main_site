import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = homeSlice.actions

export default homeSlice.reducer