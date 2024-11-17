import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = serviceSlice.actions

export default serviceSlice.reducer