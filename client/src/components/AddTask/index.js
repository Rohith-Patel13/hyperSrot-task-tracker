import {useDispatch} from 'react-redux'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'


import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import {taskSliceActions} from '../../redux/taskSlice'
import circleCrossIcon from '../../images/circle-cross-icon.png'
import './index.css'




const AddTask = () => {

  const [formData,setFormData] = useState({id:uuidv4(),title:'',description:'',team:'',assignees:'',priority: 'p0'})

  const {closeAddTaskCard} = toggleAddTaskSliceActions
  const {pending}= taskSliceActions

  const dispatch = useDispatch()  
  
  const crossClicked = ()=>{
    dispatch(closeAddTaskCard())
  }  

  const addBtnPopClicked=()=>{
    dispatch(pending(formData))
    dispatch(closeAddTaskCard())
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
    
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
                <input id='titleId' type='text'
                 className='form-control input-name'
                 name='title'
                 value={formData.title}
                 onChange={handleInputChange}
                 />
            </div>
            <div className='each-label-bg'>
                <label htmlFor='descId' className='label-name'>Description:</label>
                <textarea id='descId' type='text'
                 name='description'
                 value={formData.description}
                 onChange={handleInputChange}
                 className='form-control input-name'/>
            </div>
            <div className='each-label-bg'>
                <label htmlFor='teamId' className='label-name'>Team:</label>
                <input id='teamId' type='text'
                 name='team'
                 value={formData.team}
                 onChange={handleInputChange}
                 className='form-control input-name'/>
            </div>
            <div className='each-label-bg'>
                <label htmlFor='assigneesId' className='label-name'>Assignees:</label>
                <input id='assigneesId' type='text'
                 name='assignees'
                 value={formData.assignees}
                 onChange={handleInputChange}
                 className='form-control input-name'/>
            </div>

            <div className='each-label-bg'>
                <label className='label-name' htmlFor="selectedOption">Priority:</label>
                <select id="selectedOption"
                 name='priority'
                 value={formData.priority}
                 onChange={handleInputChange}
                >                   
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>    

            <button
             type='button'
             onClick={addBtnPopClicked}
             className='btn btn-success'>Add Task</button>       
        </form>
    </div>
  )
}

export default AddTask

