// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux'

// import { DateRangePicker } from 'react-date-range';
// import { format } from 'date-fns';
// import 'react-date-range/dist/styles.css'; 
// import 'react-date-range/dist/theme/default.css'; 

import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import './index.css'
import profile from '../../images/account-profile.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddTask from '../AddTask/index'
import EachStatusCard from '../EachStatusCard/index'
import DateTimeRangeFilter from '../DateTimeRangeFilter/index'

const Main = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const [isOpenDate, setIsOpenDate] = useState(false);
  
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

  // const handleSelect = (ranges) => {
  //   setStartDate(ranges.selection.startDate);
  //   setEndDate(ranges.selection.endDate);
  // };

  // const handleOpenDate = () => {
  //   setIsOpenDate((previousState) => !previousState);
  // };

  // const formattedStartDate = format(startDate, 'M/d/yyyy, h:mm:ss a');
  // const formattedEndDate = format(endDate, 'M/d/yyyy, h:mm:ss a');

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

        <div className='filter-by-bg'>
          <p>Filter By:</p>
          <input type='text' onChange={handleAssigneeChange} value={filterAssignee} placeholder='Assignee Name' />
          <select onChange={handleFilterPriorityChange} value={filterByPriority}>
            <option value="">
              Priority
            </option>
            <option value='p0'>
              P0
            </option>
            <option value='p1'>
              P1
            </option>
            <option value='p2'>
              P2
            </option>
          </select>

          <DateTimeRangeFilter/>
          
          {/* <p onClick={handleOpenDate} className='date-head'>
            {`${formattedStartDate} to ${formattedEndDate}`}
          </p> */}
          {/* {isOpenDate && (
            <DateRangePicker
              showSelectionPreview={true}
              showPreview={true}
              showTimePicker={true}
              showSecond={true} // include seconds
              ranges={[
                {
                  startDate,
                  endDate,
                  key: 'selection',
                },
              ]}
              onChange={handleSelect}
            />
          )} */}

        
      </div>

        <div className='sort-by-bg'>
          <label htmlFor='sortById'>Sort By:</label>
          <select id='sortById' onChange={handleSortChange} value={sortBy}>
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
                <EachStatusCard eachStatus={eachStatus}
                 filterByPriority = {filterByPriority}
                 filterAssignee={filterAssignee}
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
