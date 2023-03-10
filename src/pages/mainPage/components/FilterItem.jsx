import { useDispatch, useSelector } from 'react-redux'
import { setFilteredTasks } from '@store'

export function FilterItem ({ title }) {
  const { filter } = useSelector(state => state.taskDone)
  const dispatch = useDispatch()
  return (
    <button
      className={`h-min px-4 py-1 border border-c-text border-dashed text-sm text-c-text leading-none hover:bg-c-text hover:text-c-bg ${
        filter === title ? 'bg-c-text text-c-bg' : ''
      }`}
      onClick={() => dispatch(setFilteredTasks(title))}
      type='button'
    >
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}
