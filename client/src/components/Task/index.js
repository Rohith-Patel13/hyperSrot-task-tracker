
import { useDispatch } from 'react-redux'
import {taskSliceActions} from '../../redux/taskSlice'
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const Task = (props) => {
  
  const {eachObject}=props
  const {id,title,description,assignees,priority}=eachObject
  const {editOpen} = toggleAddTaskSliceActions
  const {removedTask}= taskSliceActions
 
  const dispatch = useDispatch()

  const deleteButtonClicked=()=>{
    // console.log("deleteButtonClicked")
    dispatch(removedTask({id}))
  }

  const editButtonClicked =()=>{
    dispatch(editOpen())
  }


  return (
    <div>
      <h3>{title}</h3>
      <p>{priority}</p>
      <p>
        {description}
      </p>
      <p>{`@${assignees}`}</p>
      <p>Assign</p>
      <div>
        <button className='btn btn-warning btns'
        onClick={editButtonClicked}
        >Edit</button>
        <button className='btn btn-danger btns'
        onClick={deleteButtonClicked}
        >Delete</button>
      </div>
    </div>
  )
}

export default Task
