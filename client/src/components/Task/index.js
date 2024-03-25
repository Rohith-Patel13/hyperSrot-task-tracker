
import { useDispatch ,useSelector} from 'react-redux'
import Edit from '../Edit/index'
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
    dispatch(editOpen(id))
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
        type='button'
        onClick={editButtonClicked}
        >Edit</button>
        <button className='btn btn-danger btns'
        type='button'
        onClick={deleteButtonClicked}
        >Delete</button>
      </div>

      {isEditOpenValue? <Edit eachObject={eachObject} key={eachObject.id}/>:null}
    </div>
  )
}

export default Task
