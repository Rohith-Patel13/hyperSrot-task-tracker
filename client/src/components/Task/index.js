import './index.css'

const Task = (props) => {
  const {eachObject}=props
  const {title,description,assignees,priority}=eachObject
  return (
    <div>
      <h3>{title}</h3>
      <p>{priority}</p>
      <p>
        {description}
      </p>
      <p>{`@${assignees}`}</p>
      <p>Assign</p>
    </div>
  )
}

export default Task
