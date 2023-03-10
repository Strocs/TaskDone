import { useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editTask } from '@store'
import { BsPencilSquare } from 'react-icons/bs'

export function ModifyTask ({ task, id }) {
  const [isDisabled, setIsDisabled] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const taskRef = useRef(null)
  useLayoutEffect(() => {
    taskRef.current.value = task
  }, [task])

  const onTaskEdit = e => {
    e.preventDefault()
    if (taskRef.current !== null && taskRef.current.value.length > 1) {
      dispatch(editTask({ newTask: taskRef.current.value, id }))
      setIsDisabled(true)
      const newPath = taskRef.current.value.toLowerCase().replaceAll(' ', '-')
      navigate(`/${newPath}`, { replace: true, state: id })
    }
  }
  const onEdit = () => {
    setIsDisabled(!isDisabled)
    taskRef.current.disabled = false
    if (!taskRef.current.disabled) {
      taskRef.current.focus()
    }
  }

  return (
    <form onSubmit={onTaskEdit} className='flex gap-2 items-center'>
      <input
        disabled={isDisabled}
        type='text'
        className='w-full text-lg bg-c-box focus:outline-1 focus:outline-c-text focus:outline-dashed'
        ref={taskRef}
        defaultValue={task}
      />
      <button
        type='button'
        aria-label='Edit this task'
        onClick={onEdit}
        className={`${isDisabled ? 'text-c-text' : 'text-green-500'}`}
      >
        <BsPencilSquare className='text-2xl' />
      </button>
    </form>
  )
}
