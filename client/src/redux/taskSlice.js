import { createSlice } from '@reduxjs/toolkit'

import {v4 as uuidv4} from 'uuid'


 

const firstState = {
    statusValues : [
        {
            id:uuidv4(),
            statusText:'Pending',
            tasks:[],
        },
        {
            id:uuidv4(),
            statusText:'In Progress',
            tasks:[],
        },
        {
            id:uuidv4(),
            statusText:'Completed',
            tasks:[],
        },
        {
            id:uuidv4(),
            statusText:'Deployed',
            tasks:[],
        },
        {
            id:uuidv4(),
            statusText:'Deffered',
            tasks:[],
        },
    ]
    
}

const taskSlice = createSlice({
  name: 'taskParticular',
  initialState:firstState,
  reducers: {
    pending:(previousState,action)=>{
        // console.log(action.payload)
        previousState.statusValues.map((eachObject)=>(
            eachObject.statusText==='Pending'?
            eachObject.tasks.push(action.payload):null
        ))
    },
  },
})

// Action creators are generated for each case reducer function
export const taskSliceActions  = taskSlice.actions

const taskSliceReducer = taskSlice.reducer
export default taskSliceReducer

