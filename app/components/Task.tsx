import { ITask } from "@/types/tasks";
import React from "react";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.key}>
      <td>{task.text}</td>
      <td>Completed</td>
    </tr>
  );
};

export default Task;
