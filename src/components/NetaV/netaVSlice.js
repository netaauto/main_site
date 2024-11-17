import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const netaVSlice = createSlice({
  name: 'netaV',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = netaVSlice.actions

export default netaVSlice.reducer