import {v4 as uuidv4} from 'uuid'
import Task from '../Task/index'
import './index.css'

const cardHeadBgColors= [
  {
    id:uuidv4(),
    backgroundColor:"#808080", // Grey
    headerText:"Pending",
  },
  {
    id:uuidv4(),
    backgroundColor:"#FFA500", // orange
    headerText:"In Progress",
  },
  {
    id:uuidv4(),
    backgroundColor:"#5ced73", // Green
    headerText:"Completed",
  },
  {
    id:uuidv4(),
    backgroundColor:"#371F76", // purple  
    headerText:"Deployed",
  },
  {
    id:uuidv4(),
    backgroundColor:"#FFCCCB", // Red
    headerText:"Deffered",
  },
]




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

  // Find the corresponding color object for the statusText
  const statusColor = cardHeadBgColors.find((colorObj) => colorObj.headerText === statusText);

  // Dynamic inline styling for the status card background color
  const statusCardStyle = {
    backgroundColor: statusColor ? statusColor.backgroundColor : '#808080', // Default white if statusText not found
  };



  return (
    <div className='each-status-card-bg'>
        <div className='each-status-card-head-bg' style={statusCardStyle}>
            <h2 className='each-status-card-head'>{statusText}</h2>
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

