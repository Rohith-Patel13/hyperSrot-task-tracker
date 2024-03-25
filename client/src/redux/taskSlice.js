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
    addToStatus:(previousState,action)=>{
        // console.log(action.payload, "in addToStatus action")
        // console.log(previousState.statusValues)
        previousState.statusValues.map((eachObject)=>(
            eachObject.statusText===action.payload.statusValue?
            eachObject.tasks.push(action.payload):null
        ))
    },
    removedTask:(previousState,action)=>{
        // console.log(previousState.statusValues)
        // console.log(action)
        /*
        filter() function returns a new array with the elements 
        that pass the test implemented by the provided function, 
        but it doesn't modify the original array in place. 
        */
        previousState.statusValues.forEach((status) => {
            status.tasks = status.tasks.filter(task => task.id !== action.payload.id);
        });
    },
  
    edit:(previousState,action)=>{
        console.log(previousState)
        console.log(action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const taskSliceActions  = taskSlice.actions

const taskSliceReducer = taskSlice.reducer
export default taskSliceReducer

