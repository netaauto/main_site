import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const cooperationSlice = createSlice({
  name: 'cooperation',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = cooperationSlice.actions

export default cooperationSlice.reducer