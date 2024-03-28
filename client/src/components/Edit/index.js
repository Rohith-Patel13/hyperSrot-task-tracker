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
            <h2 className='edit-main-head'>EDIT TASK</h2>
            <img src={circleCrossIcon}
             alt='X' 
             className='circle-cross-icon'
             onClick={crossClicked}
            />  
        </div>
        <div className='edit-form-bg'>
            <div className='bg-edit-texts'>
              <label className='label-name edit-popup-text-para' htmlFor='titleId'>Title:</label>
              <input
                id='titleId'
                type='text'
                name='title'
                value={data.title}
                onChange={isEditable ? handleInputChange : null}
                className={`form-control ${isEditable?"":"not-editable-bg"}`}
              />
            </div>
            <div className='bg-edit-texts'>
              <label className='label-name edit-popup-text-para' htmlFor='descId'>Description:</label>
              <textarea id='descId' type="text" name='description' value={data.description}
              onChange={isEditable ? handleInputChange : null}
              className={`form-control ${isEditable?"":"not-editable-bg"}`}
               />
            </div>
            <div className='bg-edit-texts'>
              <label className='label-name edit-popup-text-para' htmlFor='teamId'>Team:</label>
              <input id='teamId' type="text" name='team' value={data.team}
              onChange={isEditable ? handleInputChange : null}
              className={`form-control ${isEditable?"":"not-editable-bg"}`}
               />
            </div>
            <div className='bg-edit-texts'>
              <label className='label-name edit-popup-text-para' htmlFor='assigneeId'>Assignee:</label>
              <input id='assigneeId' type="text" name='assignees' value={data.assignees}
              onChange={isEditable ? handleInputChange : null}
              className={`form-control ${isEditable?"":"not-editable-bg"}`}
               />
            </div>
            <div className='edit-priority-bg'>
                <label className='edit-priority-para' htmlFor="selectedOption">Priority:</label>
                <select id="selectedOption"
                 name='priority'
                value={data.priority}
                className='edit-select-options '
                onChange={handleInputChange}
                >                   
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>      

            <div className='edit-status-bg'>
                <label className='edit-status-para' htmlFor="statusSelectedOption">Status:</label>
                <select id="statusSelectedOption"
                name='statusValue'
                value={data.statusValue}
                onChange={handleInputChange}
                className='edit-select-options '
                >                   
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                    <option value="Deployed">Deployed</option>
                    <option value="Deffered">Deffered</option>
                </select>
            </div>  
        </div>

        <div className='btn-edit-bg'>
          <button type='button' className='btn btn-success save-btn'
            onClick={saveButtonClicked}
          >Submit</button>   
            
          <button type='button' className='btn btn-warning reset-btn'
          onClick={handleReset}
          >Reset</button> 
        </div>

    </div>
  )
}

export default Edit
