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

    edit: (previousState, action) => {
        const {  data } = action.payload;
        previousState.statusValues.forEach((eachStatus)=>{
            eachStatus.tasks.forEach((eachTask)=>{
                if(eachTask.id===data.id){
                    if (eachTask.priority!==data.priority) {
                        eachTask.priority=data.priority
                    }
                    if(eachTask.statusValue!==data.statusValue){
                        const index = eachStatus.tasks.findIndex(t => t.id === data.id);
                        // console.log(index,'index')
                        if (index !== -1) {
                            eachStatus.tasks.splice(index, 1);
                        }
                        const targetStatus = previousState.statusValues.find(status => status.statusText === data.statusValue);
                        if (targetStatus) {
                            targetStatus.tasks.push(eachTask);
                        }
                        eachTask.statusValue = data.statusValue;
                    }
                    // Update endDate if statusValue is "Completed"
                    if (data.statusValue === "Completed") {
                        eachTask.endDate = new Date().toLocaleString();
                    }
                }
                return null
            })
        })
    },
  },
})

// Action creators are generated for each case reducer function
export const taskSliceActions  = taskSlice.actions

const taskSliceReducer = taskSlice.reducer
export default taskSliceReducer

