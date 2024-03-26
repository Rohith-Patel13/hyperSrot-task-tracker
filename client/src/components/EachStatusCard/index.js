
import Task from '../Task/index'
import './index.css'

const EachStatusCard = (props) => {
  const {eachStatus,sortBy} = props
  const {statusText,tasks} = eachStatus

   // Function to sort tasks by priority
   const sortTasksByPriority = (tasks) => {
    return tasks.slice().sort((taskA, taskB) => {
        // console.log(a.priority) //p0 or p1 or p2 
        const priorityOrder = { "p0": 0, "p1": 1, "p2": 2 }; 
        return priorityOrder[taskA.priority] - priorityOrder[taskB.priority];
    });
  }; 


  const sortTasksBy=(tasks)=>{
    switch (sortBy) {       
      case 'priority':
        return sortTasksByPriority(tasks) 
      case "startDate":
        return tasks  
      case "endDate":
        return tasks.slice().reverse()
      default:
        return sortTasksByPriority(tasks)
    }
  }

  return (
    <div className='each-status-card-bg'>
        <div>
            <h1>{statusText}</h1>
        </div>
        {
          tasks.length>0? sortTasksBy(tasks).map((eachObject)=>(
            <Task eachObject={eachObject} key={eachObject.id}/>
          )):null
        }
    </div>
  )
}

export default EachStatusCard
