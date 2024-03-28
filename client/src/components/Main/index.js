import { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux'


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import './index.css'
import profile from '../../images/account-profile.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddTask from '../AddTask/index'
import EachStatusCard from '../EachStatusCard/index'

const Main = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dispatch = useDispatch()  
  const {openAddTaskCard,changeSortBy,changeFilterBy,setFilterAssignee} = toggleAddTaskSliceActions
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

  const sortBy = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState
    const {sortBy} = mainToggleAddTaskSliceReducer
    return sortBy
  })

  const filterByPriority = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState
    const {filterByPriority} = mainToggleAddTaskSliceReducer
    return filterByPriority
  })

  const filterAssignee = useSelector((previousState)=>{
    const {mainToggleAddTaskSliceReducer} = previousState
    const {filterAssignee} = mainToggleAddTaskSliceReducer
    return filterAssignee
  })

  // console.log(statusListValues)

  const addNewTaskButtonClicked=()=>{
    dispatch(openAddTaskCard())
  }

  const handleSortChange = (e) => {
    dispatch(changeSortBy(e.target.value));
  };

  const handleFilterPriorityChange=(e)=>{
    dispatch(changeFilterBy(e.target.value))
  }

  const handleAssigneeChange = (e)=>{
    dispatch(setFilterAssignee(e.target.value))
  }


  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };




 
  return (
    <div className='task-board-bg'>
      <div className='header'>
        <h1>Task Board</h1>
        <div className='profile-image-bg'>
          <img src={profile} alt='profile' className='profile-image' />
        </div>        
      </div>
      <div className='all-cards-bg'>
        <div className='board-header'>
          <div className='filter-sort-bg'>
            <div className='filter-by-bg'>
              <p className='filter-head-para'>Filter By:</p>
              <input type='text' className='form-control assignee-input' onChange={handleAssigneeChange} value={filterAssignee} placeholder='Assignee Name' />
              <select className='filterby-priority-options' onChange={handleFilterPriorityChange} value={filterByPriority}>
                <option value="">
                  Priority
                </option>
                <option  value='p0'>
                  P0
                </option>
                <option  value='p1'>
                  P1
                </option>
                <option  value='p2'>
                  P2
                </option>
              </select>

              <div className='bg-date'>
                <div className='start-date-bg'>
                  
                  <DatePicker
                  className='form-control start-date-input'
                  placeholderText='Start Date...'
                  selected={startDate}
                  onChange={handleStartDateChange}
                  showTimeSelect
                  timeFormat="HH:mm:ss"
                  timeIntervals={1}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm:ss aa"
                  />
                </div>
                <div className='end-date-bg'>
                  
                  <DatePicker
                  className='form-control end-date-input'
                  placeholderText='End Date...'
                  selected={endDate}
                  onChange={handleEndDateChange}
                  showTimeSelect
                  timeFormat="HH:mm:ss"
                  timeIntervals={1}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm:ss aa"
                  />
                </div>
              </div>
            </div>

            <div className='sort-by-bg'>
              <label className='sort-by-text' htmlFor='sortById'>Sort By:</label>
              <select className='filterby-priority-options' id='sortById' onChange={handleSortChange} value={sortBy}>
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
          </div>

          <button type='button' className='btn btn-primary add-task-btn'
            onClick={addNewTaskButtonClicked}>
              Add New Task
          </button>
        </div>      
        <div className='bg-status-card'>
            {
              statusListValues.map((eachStatus)=>(
                <EachStatusCard eachStatus={eachStatus}
                 filterByPriority = {filterByPriority}
                 filterAssignee={filterAssignee}
                 startDate={startDate} endDate={endDate}
                 sortBy={sortBy}
                 key={eachStatus.id}/>
              ))
            }
        </div>
    
        {isOpenValue? <AddTask/> : null}
      </div>
    </div>
  )
}

export default Main
