import Task from '../Task/index'
import './index.css'

const EachStatusCard = (props) => {
    const {eachStatus} = props
    const {statusText,tasks} = eachStatus

    // Function to sort tasks by priority
    const sortTasksByPriority = (tasks) => {
      return tasks.slice().sort((a, b) => {
          // console.log(a.priority) //p0 or p1 or p2 
          const priorityOrder = { p0: 0, p1: 1, p2: 2 }; // Define priority order
          return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    };
    
  return (
    <div className='each-status-card-bg'>
        <div>
            <h1>{statusText}</h1>
        </div>
        {
          tasks.length>0? sortTasksByPriority(tasks).map((eachObject)=>(
            <Task eachObject={eachObject} key={eachObject.id}/>
          )):null
        }
    </div>
  )
}

export default EachStatusCard
