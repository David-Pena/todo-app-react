import TaskItem from "./TaskItem";

const TaskList = ({ tasks, ontDeleteTask }) => {
  return (
    <>
      <ul className=" text-white">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={myTask => ontDeleteTask(myTask)}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
