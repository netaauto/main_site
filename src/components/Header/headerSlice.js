import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  selectedMenu:null
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
    setSelectedMenu: (state, action) => {
        state.selectedMenu = action.payload
      },
  },
})

export const { setData,setSelectedMenu } = headerSlice.actions

export default headerSlice.reducer