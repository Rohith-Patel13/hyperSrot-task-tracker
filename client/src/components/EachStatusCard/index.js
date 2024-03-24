

import Task from '../Task/index'
import './index.css'




const EachStatusCard = (props) => {
    const {eachStatus} = props
    const {statusText,tasks} = eachStatus
    
  return (
    <div className='each-status-card-bg'>
        <div>
            <h1>{statusText}</h1>
        </div>
        {
          tasks.length>0? tasks.map((eachObject)=>(
            <Task eachObject={eachObject} key={eachObject.id}/>
          )):null
        }
        
    </div>
  )
}

export default EachStatusCard
