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
    ],

    taskToBeEdit:{}
    
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

    taskToBeEditable:(previousState,action)=>{
        // console.log(previousState,action.payload.eachObject)
        previousState.taskToBeEdit=action.payload.eachObject
    },
  
    edit: (state, action) => {
        const { id, data } = action.payload;
        state.statusValues.forEach(status => {
          status.tasks.forEach(task => {
            if (task.id === id) {
              // Update priority if changed
              if (data.priority) {
                task.priority = data.priority;
              }
              // Move task to new status if status changed
              if (data.statusValue && task.statusValue !== data.statusValue) {
                const index = status.tasks.findIndex(t => t.id === id);
                if (index !== -1) {
                  status.tasks.splice(index, 1);
                  state.statusValues.forEach(newStatus => {
                    if (newStatus.statusText === data.statusValue) {
                      newStatus.tasks.push(task);
                    }
                  });
                }
                task.statusValue = data.statusValue;
              }
            }
          });
        });
      },
  },
})

// Action creators are generated for each case reducer function
export const taskSliceActions  = taskSlice.actions

const taskSliceReducer = taskSlice.reducer
export default taskSliceReducer

