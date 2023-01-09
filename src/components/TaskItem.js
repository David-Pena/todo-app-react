import { BiCheck, BiTrash } from 'react-icons/bi';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <>
      <li className="px-3 py-3 flex items-start">
        <div className="flex-grow">
          <div className="flex items-center">
            <span className={`flex-none font-medium text-xl ${task.isDone ? 'line-through' : ''}`}>{task.description}</span>
          </div>
          <div className={task.isDone ? 'line-through' : ''}><b className="font-bold text-sm text-blue-400">Assigned:</b> {task.assigned}</div>
        </div>

        {
          !task.isDone && (
            <button onClick={() => onCompleteTask(task.id)} className="flex p-2 ml-4 mr-2 border-2 rounded border-none bg-green-700 hover:bg-green-500">
              <BiCheck className="mt-1 mr-1 text-lg" />
              <span className="mr-1 mt-0.5">Done</span>
            </button>
          )
        }
        <button onClick={() => onDeleteTask(task.id)} className="flex p-2 ml-2 border-2 rounded border-none bg-red-700 hover:bg-red-500">
          <BiTrash className="mt-1 mr-1 text-lg" />
          <span className="mr-1 mt-0.5">Remove</span>
        </button>
      </li>
    </>
  )
}

export default TaskItem;