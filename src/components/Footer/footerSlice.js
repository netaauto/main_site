import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],

}

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },

  },
})

export const { setData } = footerSlice.actions

export default footerSlice.reducer