import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const toggleAddTaskSlice = createSlice({
  name: 'toggleAddTask',
  initialState,
  reducers: {
    openAddTaskCard:(previousState)=>{
        previousState.isOpen=true
    },
    closeAddTaskCard:(previousState)=>{
        previousState.isOpen=false
    }
  },
})

// Action creators are generated for each case reducer function
export const toggleAddTaskSliceActions  = toggleAddTaskSlice.actions


const toggleAddTaskSliceReducer = toggleAddTaskSlice.reducer

export default toggleAddTaskSliceReducer

