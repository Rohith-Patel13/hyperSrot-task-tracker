
import { useDispatch ,useSelector} from 'react-redux'
import {format} from 'date-fns'
import Edit from '../Edit/index'
import Delete from '../Delete/index'
import {taskSliceActions} from '../../redux/taskSlice'
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const Task = (props) => {
  
  const {eachObject}=props
  const {title,description,assignees,priority,statusValue,startDate,team}=eachObject
  // console.log(startDate,"startDate") // format: 3/28/2024, 3:21:02 PM
  const inputDate = new Date(startDate);
  // console.log(inputDate,"inputDate") // format: Thu Mar 28 2024 15:27:07 GMT+0530 (India Standard Time)
  const formattedDate = format(inputDate, 'MMMM do, yyyy, h:mm:ss a');
 
  const {editOpen,deleteOpen} = toggleAddTaskSliceActions
  const {/*removedTask,*/taskToBeEditable,taskToBeDeletable}= taskSliceActions  
  const dispatch = useDispatch()

  const isEditOpenValue = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState 
    const {isEditOpen} = mainToggleAddTaskSliceReducer
    return isEditOpen
  })

  const isDeleteOpen = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState 
    const {isDeleteOpen} = mainToggleAddTaskSliceReducer
    return isDeleteOpen
  })


  const deleteButtonClicked=()=>{
    // console.log("deleteButtonClicked")
    dispatch(deleteOpen())
    dispatch(taskToBeDeletable({eachObject}))    
    // dispatch(removedTask({id}))
  }


  const editButtonClicked =()=>{
    // console.log(id,'editButtonClicked')   
    // console.log(eachObject,'editButtonClicked')
    dispatch(editOpen())
    dispatch(taskToBeEditable({eachObject}))    
  }

  return (
    <div className='each-task-bg'>
      <div className='head'>
        <h3>{title}</h3>
        <div className='bg-priority-para'>
          <p className='priority-para'>{priority}</p>
        </div>
        
      </div>
      <hr className='horizontal-line'/>

      <p className='desc'>
        {description}
      </p>
      <p><span className='team-text'>Team: </span>{team}</p>
      <h3 className='at-the-rate-icon'>{`@${assignees}`}</h3>
      <div className='status-value-text-bg'>
        <p className='status-value-text'>{statusValue}</p>
      </div>
      
      <p className='start-date-para'> <span className='head-date-each'>Start Date: </span>{`${formattedDate}`}</p>
      <div>
        <button className='btn btn-warning btns'
        type='button'
        onClick={editButtonClicked}
        >Edit</button>
        <button className='btn btn-danger btns'
        type='button'
        onClick={deleteButtonClicked}
        >Delete</button>
      </div>

      
      {isEditOpenValue && <Edit />}   

      {isDeleteOpen && <Delete/>}
      
    </div>
  )
}

export default Task

