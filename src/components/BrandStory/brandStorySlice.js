import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const brandStorySlice = createSlice({
  name: 'brandStory',
  initialState,
  reducers: {
  
    setData: (state, action) => {
      state.data = action.payload
    },
   
  },
})

export const { setData, } = brandStorySlice.actions

export default brandStorySlice.reducer