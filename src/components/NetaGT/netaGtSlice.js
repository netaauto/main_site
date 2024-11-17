import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const netaGtSlice = createSlice({
  name: 'netaGt',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = netaGtSlice.actions

export default netaGtSlice.reducer