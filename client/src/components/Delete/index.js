import { useDispatch  } from "react-redux"
import "./index.css"
import circleCrossIcon from '../../images/circle-cross-icon.png'



const Delete = () => {

  const dispatch = useDispatch()  
  const {deleteClose} = toggleAddTaskSliceActions

  const crossClicked = ()=>{
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
        <div className='delete-form-bg'>
            <div className='bg-edit-texts'>
              <label className='label-name edit-popup-text-para' htmlFor='titleId'>Title:</label>
              <input
                id='titleId'
                type='text'
                name='title'
                value={data.title}
                onChange={isEditable ? handleInputChange : null}
                className={`form-control ${isEditable?"":"not-editable-bg"}`}
              />
            </div>
        </div>

        <div className='btn-delete-bg'>
          <button type='button' className='btn btn-success yes-btn'
          >Yes</button>   
            
          <button type='button' className='btn btn-warning no-btn'
          >No</button> 
        </div>

    </div>
  )
}

export default Delete
