import {  useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import {taskSliceActions} from '../../redux/taskSlice'
import circleCrossIcon from '../../images/circle-cross-icon.png'

import './index.css'

const Edit = () => {

  const [isEditable,setIsEditable] = useState(false)
  
  const editableObject = useSelector((previousState)=>{
    const {mainTaskSliceReducer} = previousState 
    const {taskToBeEdit} = mainTaskSliceReducer
    return taskToBeEdit
  })

  // console.log(editableObject,"editableObject")

  
  const [data,setData] = useState({})


  // console.log(id, 'in Edit Component')

  const dispatch = useDispatch()  
  const {editClose} = toggleAddTaskSliceActions
  const {edit} = taskSliceActions


  const crossClicked = ()=>{
    dispatch(editClose())
  }  

  const saveButtonClicked=()=>{
    dispatch(edit({data}))
    dispatch(editClose())
  }


  const handleInputChange =(e)=>{
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  useEffect(()=>{
    setData(editableObject)
  },[editableObject])


  const handleReset = () => {
    setIsEditable(true)
  };
  
 


  // console.log(data,'In Edit Component')
  return (
    <div className='edit-task-bg'>
        <div className='header-edit-task-bg'>
            <h2>EDIT TASK</h2>
            <img src={circleCrossIcon}
             alt='X' 
             className='circle-cross-icon'
             onClick={crossClicked}
            />  
        </div>
        <form>
            <div>
              <label htmlFor='titleId'>Title:</label>
              <input
                id='titleId'
                type='text'
                name='title'
                value={data.title}
                onChange={isEditable ? handleInputChange : null}
              />
            </div>
            <div>
              <label htmlFor='descId'>Description:</label>
              <textarea id='descId' type="text" name='description' value={data.description}
              onChange={isEditable ? handleInputChange : null}
               />
            </div>
            <div>
              <label htmlFor='teamId'>Team:</label>
              <input id='teamId' type="text" name='team' value={data.team}
              onChange={isEditable ? handleInputChange : null}
               />
            </div>
            <div>
              <label htmlFor='assigneeId'>Assignee:</label>
              <input id='assigneeId' type="text" name='assignees' value={data.assignees}
              onChange={isEditable ? handleInputChange : null}
               />
            </div>
            <div className='each-label-bg'>
                <label className='label-name' htmlFor="selectedOption">Priority:</label>
                <select id="selectedOption"
                 name='priority'
                value={data.priority}
                onChange={handleInputChange}
                >                   
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>      

            <div className='each-label-bg'>
                <label className='label-name' htmlFor="statusSelectedOption">Status:</label>
                <select id="statusSelectedOption"
                name='statusValue'
                value={data.statusValue}
                onChange={handleInputChange}
                >                   
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                    <option value="Deployed">Deployed</option>
                    <option value="Deffered">Deffered</option>
                </select>
            </div>  

            <button type='button' className='btn btn-success'
            onClick={saveButtonClicked}
            >Submit</button>   
            
            <button type='button' className='btn btn-warning'
            onClick={handleReset}
            >Reset</button>  
        </form>
        
    </div>
  )
}

export default Edit
