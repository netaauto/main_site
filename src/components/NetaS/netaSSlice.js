import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const netaSSlice = createSlice({
  name: 'netaS',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = netaSSlice.actions

export default netaSSlice.reducer