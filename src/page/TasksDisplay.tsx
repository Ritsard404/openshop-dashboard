import React, { useState } from "react";
import { FacilitatorTasksDTO } from "./TaskList";

const TaskCard: React.FC<{ task: FacilitatorTasksDTO }> = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          {task.taskName || "Unnamed Task"}
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-500 hover:underline"
        >
          {isOpen ? "Hide Subtasks" : "Show Subtasks"}
        </button>
      </div>
      <p className="text-sm text-gray-500">
        Planned: {task.plannedStartDate?.toLocaleDateString()} -{" "}
        {task.plannedEndDate?.toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Progress:</strong> {task.progress ?? 0}%
      </p>
      {task.startProofImage && (
        <img
          src={task.startProofImage}
          alt="Start Proof"
          className="mt-2 w-32 h-auto rounded-md"
        />
      )}

      {isOpen && task.subtasks && task.subtasks.length > 0 && (
        <div className="pl-4 mt-4">
          {task.subtasks.map((subtask) => (
            <TaskCard key={subtask.id} task={subtask} />
          ))}
        </div>
      )}
    </div>
  );
};

const TasksDisplay: React.FC<{ tasks: FacilitatorTasksDTO[] }> = ({
  tasks,
}) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksDisplay;
