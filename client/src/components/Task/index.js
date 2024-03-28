
import { useDispatch ,useSelector} from 'react-redux'
import Edit from '../Edit/index'
import {taskSliceActions} from '../../redux/taskSlice'
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const Task = (props) => {
  
  const {eachObject}=props
  const {id,title,description,assignees,priority,statusValue,startDate,endDate}=eachObject

  const showDateString = startDate.toLocaleString();
  const showEndDateSrtring = !endDate?null:endDate.toLocaleString()

  const {editOpen} = toggleAddTaskSliceActions
  const {removedTask,taskToBeEditable}= taskSliceActions  
  const dispatch = useDispatch()

  const isEditOpenValue = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState 
    const {isEditOpen} = mainToggleAddTaskSliceReducer
    return isEditOpen
  })

  const deleteButtonClicked=()=>{
    // console.log("deleteButtonClicked")
    dispatch(removedTask({id}))
  }

  const editButtonClicked =()=>{
    // console.log(id,'editButtonClicked')   
    // console.log(eachObject,'editButtonClicked')
    dispatch(editOpen({id}))
    dispatch(taskToBeEditable({eachObject}))    
  }

  

  return (
    <div className='each-task-bg'>
      <h3>{title}</h3>
      <p>{priority}</p>
      <p>
        {description}
      </p>
      <p>{`@${assignees}`}</p>
      <p>{statusValue}</p>
      <p>{`Start Date: ${showDateString}`}</p>
      <p>{`End Date: ${showEndDateSrtring}`}</p>
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

      
      {isEditOpenValue &&  (
        <Edit />
      )}   
    </div>
  )
}

export default Task

