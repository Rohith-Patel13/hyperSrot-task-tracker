import {useDispatch} from 'react-redux'
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import circleCrossIcon from '../../images/circle-cross-icon.png'
import './index.css'



const AddTask = () => {

  const {closeAddTaskCard} = toggleAddTaskSliceActions
  const dispatch = useDispatch()  
  
  const crossClicked = ()=>{
    dispatch(closeAddTaskCard())
  }  

  const addBtnPopClicked=()=>{
    dispatch(closeAddTaskCard())
  }
    
  return (
    <div className='add-task-bg'>
        <div className='header-add-task-bg'>
            <h2>CREATE A TASK</h2>
            <img src={circleCrossIcon}
             alt='X' 
             className='circle-cross-icon'
             onClick={crossClicked}
            />  
        </div>
        <form>
            <div className='each-label-bg'>
                <label htmlFor='titleId' className='label-name'>Title:</label>
                <input id='titleId' type='text' className='form-control input-name'/>
            </div>
            <div className='each-label-bg'>
                <label htmlFor='descId' className='label-name'>Description:</label>
                <textarea id='descId' type='text' className='form-control input-name'/>
            </div>
            <div className='each-label-bg'>
                <label htmlFor='teamId' className='label-name'>Team:</label>
                <input id='teamId' type='text' className='form-control input-name'/>
            </div>
            <div className='each-label-bg'>
                <label htmlFor='assigneesId' className='label-name'>Assignees:</label>
                <input id='assigneesId' type='text' className='form-control input-name'/>
            </div>

            <div className='each-label-bg'>
                <label className='label-name' htmlFor="selectedOption">Priority:</label>
                <select id="selectedOption" name="selectedOption">                   
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>    

            <button
             onClick={addBtnPopClicked}
             className='btn btn-success'>Add Task</button>       
        </form>
    </div>
  )
}

export default AddTask
