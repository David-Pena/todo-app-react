import React from "react";
import TaskItem from "./TaskItem";
import { ITask } from '../interfaces/task';

const TaskList = ({ tasks, onUpdateTask, onDelTask }) => {
  return (
    <>
      <ul className=" text-white">
        {tasks.map((task: ITask) => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={(taskId: number) => onUpdateTask(taskId)}
            onDeleteTask={(taskId: number) => onDelTask(taskId)}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
