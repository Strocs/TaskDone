import { useSelector } from 'react-redux'
import { TaskItem } from '.'

export function TasksList () {
  const { filteredTasks } = useSelector(state => state.taskDone)
  return (
    <ul>
      {filteredTasks.map(({ task, done, id, tags, created }) => (
        <TaskItem
          key={id}
          text={task}
          done={done}
          id={id}
          tags={tags}
          created={created}
        />
      ))}
    </ul>
  )
}
