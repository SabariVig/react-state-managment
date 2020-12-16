import { useRecoilValue } from 'recoil'
import remaningTasks, { completedTasks } from '../Context/RemainingTask'

const Pending = () => {
  const rTasks = useRecoilValue(remaningTasks)
  const cTasks = useRecoilValue(completedTasks)
  return (
    <div>
      Remaining Tasks
      <div>{rTasks}</div>
      <br />
      <div>Finished Tasks</div>
      <div>0</div>
    </div>
  )
}

export default Pending
