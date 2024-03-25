
import { useDispatch } from 'react-redux'
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import circleCrossIcon from '../../images/circle-cross-icon.png'

import './index.css'

const Edit = () => {

  const dispatch = useDispatch()  
  const {editClose} = toggleAddTaskSliceActions


  const crossClicked = ()=>{
    dispatch(editClose())
  }  

  return (
    <div className='edit-task-bg'>
        <div className='header-edit-task-bg'>
            <h2>EDIT TASK</h2>
            <img src={circleCrossIcon}
             alt='X' 
             className='circle-cross-icon'
             onClick={crossClicked}
            />  
        </div>
        <form>
            <div className='each-label-bg'>
                <label className='label-name' htmlFor="selectedOption">Priority:</label>
                <select id="selectedOption"
                 name='priority'
                //  value={formData.priority}
                //  onChange={handleInputChange}
                >                   
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>      

            <div className='each-label-bg'>
                <label className='label-name' htmlFor="statusSelectedOption">Status:</label>
                <select id="statusSelectedOption"
                 name='status'
                //  value={formData.priority}
                //  onChange={handleInputChange}
                >                   
                    <option value="completed">Completed</option>
                    <option value="inprogress">In Progress</option>
                    <option value="pending">Pending</option>
                    <option value="deployed">Deployed</option>
                    <option value="deffered">Deffered</option>
                </select>
            </div>         
        </form>
    </div>
  )
}

export default Edit

