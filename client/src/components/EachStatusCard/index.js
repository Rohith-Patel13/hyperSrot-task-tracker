
import Task from '../Task/index'
import './index.css'

const EachStatusCard = (props) => {
  const {eachStatus,sortBy,filterAssignee,filterByPriority,startDate,endDate } = props
  const {statusText,tasks} = eachStatus

  // console.log(startDate,endDate)

   // Function to sort tasks by priority
   const sortTasksByPriority = (tasks) => {
    return tasks.slice().sort((taskA, taskB) => {
        // console.log(a.priority) //p0 or p1 or p2 
        const priorityOrder = { "p0": 0, "p1": 1, "p2": 2 }; 
        return priorityOrder[taskA.priority] - priorityOrder[taskB.priority];
    });
  }; 


  const sortTasksByStartDate=(tasks)=>{
    return tasks.slice().sort((taskA,taskB)=>{
      // console.log(new Date(taskA.startDate)) Example Output:- Wed Mar 27 2024 11:15:18 GMT+0530 (India Standard Time)
      const convertedTaskAdate = new Date(taskA.startDate)
      const convertedTaskBdate = new Date(taskB.startDate)
      if(convertedTaskAdate>convertedTaskBdate){
        return 1 // will sort in ascending order
      }
      return -1 // will not sort
    })
  }  

  const sortTasksByEndDate=(tasks)=>{
    return tasks.slice().sort((taskA,taskB)=>{
      // console.log(new Date(taskA.startDate)) Example Output:- Wed Mar 27 2024 11:15:18 GMT+0530 (India Standard Time)
      const convertedTaskAdate = new Date(taskA.startDate)
      const convertedTaskBdate = new Date(taskB.startDate)
      if(convertedTaskAdate<convertedTaskBdate){
        return 1 // will sort descending order or most recently added task
      }
      return -1 // will not sort
    })
  }  

  

  const sortTasksBy=(tasks)=>{
    const filteredTasks = tasks.filter((eachTask)=>{
      // console.log(filterByPriority,'filterByPriority')
      // console.log(eachTask.priority.toLowerCase(),"eachTask.priority.toLowerCase()")
      const priorityMatch = filterByPriority===''?true: eachTask.priority.toLowerCase().includes(filterByPriority.toLowerCase())          
      // console.log(priorityMatch,'priorityMatch')
      const taskStartDate = new Date(eachTask.startDate);
      const taskEndDate = new Date(eachTask.endDate);
      const taskDate = startDate===null || endDate===null ? true:taskStartDate >= startDate && taskEndDate <= endDate
      return eachTask.assignees.toLowerCase().includes(filterAssignee.toLowerCase())
      && priorityMatch && taskDate   
    })

    switch (sortBy) {       
      case 'priority':
        return sortTasksByPriority(filteredTasks) 
      case "startDate":
        return sortTasksByStartDate(filteredTasks)  
      case "endDate":
        return sortTasksByEndDate(filteredTasks)
      default:
        return sortTasksByPriority(filteredTasks)
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
