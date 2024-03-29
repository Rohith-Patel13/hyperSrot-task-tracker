import { useDispatch ,useSelector } from "react-redux"
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import {taskSliceActions} from '../../redux/taskSlice'
import "./index.css"
import circleCrossIcon from '../../images/circle-cross-icon.png'



const Delete = () => {
  const deletableObject = useSelector((previousState)=>{
    const {mainTaskSliceReducer} = previousState 
    const {taskToBeDelete} = mainTaskSliceReducer
    return taskToBeDelete
  })
  console.log(deletableObject,"deletableObject")

  const {id,title}= deletableObject
  const {removedTask} = taskSliceActions

  const dispatch = useDispatch()  
  const {deleteClose} = toggleAddTaskSliceActions

  const crossClicked = ()=>{
    dispatch(deleteClose())
  } 

  const yesBtnClicked =()=>{
    dispatch(deleteClose())
    dispatch(removedTask({id}))
  }

  const noBtnClicked =()=>{
    dispatch(deleteClose())
  }

  return (
    <div className='delete-task-bg'>
        <div className='header-delete-task-bg'>
            <h2 className='delete-main-head'>DELETE TASK</h2>
            <img src={circleCrossIcon}
             alt='X' 
             className='circle-cross-icon'
             onClick={crossClicked}
            />  
        </div>
        <div className='delete-text-btn-bg'>
          <p className='deletepopup-text-para'>Title:{title}</p>      
          <button type='button' className='btn btn-danger yes-btn'
          onClick={yesBtnClicked}
          >Yes</button>   
          <button type='button' className='btn btn-warning no-btn'
          onClick={noBtnClicked}
          >No</button> 
        </div>
    </div>
  )
}

export default Delete
