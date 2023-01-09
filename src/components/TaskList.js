import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdateTask, onDelTask }) => {
  return (
    <>
      <ul className=" text-white">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={taskId => onUpdateTask(taskId)}
            onDeleteTask={taskId => onDelTask(taskId)}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
