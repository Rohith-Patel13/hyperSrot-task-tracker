// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { useSelector,useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'

import './index.css'
import profile from '../../images/account-profile.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddTask from '../AddTask/index'
import EachStatusCard from '../EachStatusCard/index'



const statusValues = [
    {
        id:uuidv4(),
        statusText:'Pending'
    },
    {
        id:uuidv4(),
        statusText:'In Progress'
    },
    {
        id:uuidv4(),
        statusText:'Completed'
    },
    {
        id:uuidv4(),
        statusText:'Deployed'
    },
    {
        id:uuidv4(),
        statusText:'Deffered'
    },
]



const Main = () => {

  const dispatch = useDispatch()  
  const {openAddTaskCard} = toggleAddTaskSliceActions
  const isOpenValue = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState
    const {isOpen} = mainToggleAddTaskSliceReducer
    return isOpen
  })

  const addNewTaskButtonClicked=()=>{
    dispatch(openAddTaskCard())
  }


  return (
    <div className='task-board-bg'>
      <div className='header'>
        <h1>Task Board</h1>
        <img src={profile} alt='profile' className='profile-image' />
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
      </div>
      <div className='all-cards-bg'>
        <button type='button' className='btn btn-primary add-task-btn'
        onClick={addNewTaskButtonClicked}
        >Add New Task</button>

        <div className='bg-status-card'>
            {
                statusValues.map((eachStatus)=>(
                    <EachStatusCard eachStatus={eachStatus} key={eachStatus.id}/>
                ))
            }
        </div>
    
        {isOpenValue? <AddTask/> : null}
      </div>
    </div>
  )
}

export default Main
