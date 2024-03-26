// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { useSelector,useDispatch} from 'react-redux'

import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import './index.css'
import profile from '../../images/account-profile.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddTask from '../AddTask/index'
import EachStatusCard from '../EachStatusCard/index'



const Main = () => {

  const dispatch = useDispatch()  
  const {openAddTaskCard} = toggleAddTaskSliceActions
  const isOpenValue = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState
    const {isOpen} = mainToggleAddTaskSliceReducer
    return isOpen
  })

  const statusListValues = useSelector((previousState)=>{
    const {mainTaskSliceReducer} = previousState
    const {statusValues} = mainTaskSliceReducer
    return statusValues
  })

  // console.log(statusListValues)

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

        <div className='sort-by-bg'>
          <label htmlFor='sortById'>Sort By:</label>
          <select id='sortById'>
            <option value='priority'>
              Priority
            </option>
            <option value='startDate'>
              Start Date
            </option>
            <option value='endDate'>
              End Date
            </option>
          </select>
        </div>
        
        <div className='bg-status-card'>
            {
              statusListValues.map((eachStatus)=>(
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
