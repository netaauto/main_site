import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const netaUSlice = createSlice({
  name: 'netaU',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = netaUSlice.actions

export default netaUSlice.reducer