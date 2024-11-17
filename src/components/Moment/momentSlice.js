import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const momentSlice = createSlice({
  name: 'moment',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = momentSlice.actions

export default momentSlice.reducer