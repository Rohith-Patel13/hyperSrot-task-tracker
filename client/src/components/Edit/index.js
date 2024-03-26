import {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {toggleAddTaskSliceActions} from '../../redux/toggleAddTaskSlice'
import {taskSliceActions} from '../../redux/taskSlice'
import circleCrossIcon from '../../images/circle-cross-icon.png'

import './index.css'

const Edit = (props) => {
  
  const {eachObject} = props 

  console.log(eachObject,'in Edit')
  const [data,setData] = useState(eachObject)


  // console.log(id, 'in Edit Component')

  const dispatch = useDispatch()  
  const {editClose} = toggleAddTaskSliceActions
  const {edit} = taskSliceActions


  const crossClicked = ()=>{
    dispatch(editClose())
  }  

  const saveButtonClicked=()=>{
    dispatch(edit({data}))
  }


  const handleInputChange =(e)=>{
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  useEffect(()=>{
    setData(eachObject)
  },[eachObject])



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
                value={data.priority}
                onChange={handleInputChange}
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
                value={data.statusValue}
                onChange={handleInputChange}
                >                   
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                    <option value="Deployed">Deployed</option>
                    <option value="Deffered">Deffered</option>
                </select>
            </div>  

            <button type='button' className='btn btn-success'
            onClick={saveButtonClicked}
            >Save</button>    
        </form>
        
    </div>
  )
}

export default Edit
