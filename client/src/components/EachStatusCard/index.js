
import Task from '../Task/index'
import './index.css'

const EachStatusCard = (props) => {
    const {eachStatus} = props
    const {statusText} = eachStatus
  return (
    <div className='each-status-card-bg'>
        <div>
            <h1>{statusText}</h1>
        </div>
        <Task/>
    </div>
  )
}

export default EachStatusCard
