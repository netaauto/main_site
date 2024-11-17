import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = contactUsSlice.actions

export default contactUsSlice.reducer