import React from "react";
import { FacilitatorTasksDTO, tasks } from "./TaskList";

interface TaskItemProps {
  task: FacilitatorTasksDTO;
}

// Recursive component to display tasks and their subtasks
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="task bg-white shadow-md rounded-lg p-4 mb-4" key={task.id}>
      <h3 className="text-xl font-semibold text-gray-800">
        {task.taskName || "Unnamed Task"}
      </h3>
      <p className="text-gray-600">
        <strong>Progress:</strong> {task.progress ?? 0}%
      </p>
      <p className="text-gray-600">
        <strong>Planned Start:</strong>{" "}
        {task.plannedStartDate?.toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        <strong>Planned End:</strong>{" "}
        {task.plannedEndDate?.toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        <strong>Actual Start:</strong>{" "}
        {task.actualStartDate?.toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        <strong>Actual End:</strong> {task.actualEndDate?.toLocaleDateString()}
      </p>
      {task.startProofImage && (
        <img
          className="w-1/2 h-auto mt-2 rounded-md"
          src={task.startProofImage}
          alt="Start Proof"
        />
      )}
      {task.endProofImage && (
        <img
          className="w-1/2 h-auto mt-2 rounded-md"
          src={task.endProofImage}
          alt="End Proof"
        />
      )}

      {/* Render subtasks */}
      {task.subtasks && task.subtasks.length > 0 && (
        <div className="subtask-list mt-4">
          <h4 className="text-lg font-semibold text-gray-700">Subtasks:</h4>
          {task.subtasks.map((subtask) => (
            <TaskItem key={subtask.id} task={subtask} />
          ))}
        </div>
      )}
    </div>
  );
};

const TasksDisplay: React.FC = () => {
  return (
    <div className="task-list p-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksDisplay;
