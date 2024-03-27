import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  isEditOpen:false,
  sortBy: 'priority',
  filterByPriority:"priority" ,
  filterAssignee: "",
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
    },
    editOpen:(previousState)=>{
      previousState.isEditOpen=true
    },
    editClose:(previousState)=>{
      previousState.isEditOpen=false
    },
    changeSortBy: (previousState, action) => {
      previousState.sortBy = action.payload;
    },
    changeFilterBy:(previousState,action)=>{
      previousState.filterByPriority=action.payload
    },
    setFilterAssignee: (previousState, action) => {
      previousState.filterAssignee = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const toggleAddTaskSliceActions  = toggleAddTaskSlice.actions


const toggleAddTaskSliceReducer = toggleAddTaskSlice.reducer

export default toggleAddTaskSliceReducer

