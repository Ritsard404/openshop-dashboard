export interface Subtask {
  id: number;
  taskId: number;
  taskName?: string;
  plannedStartDate?: Date | null;
  plannedEndDate?: Date | null;
  actualStartDate?: Date | null;
  actualEndDate?: Date | null;
  startProofImage?: string | null;
  endProofImage?: string | null;
  progress?: number;
  subtasks?: Subtask[]; // Recursive type for subtasks
}

export interface FacilitatorTasksDTO {
  id: number;
  taskId: number;
  taskName?: string;
  plannedStartDate?: Date | null;
  plannedEndDate?: Date | null;
  actualStartDate?: Date | null;
  actualEndDate?: Date | null;
  startProofImage?: string | null;
  endProofImage?: string | null;
  progress?: number;
  projId?: string;
  subtasks?: Subtask[]; // List of subtasks
}

export const tasks: FacilitatorTasksDTO[] = [
  {
    id: 3,
    taskId: 3,
    taskName: "New Task 3",
    plannedStartDate: new Date("2024-10-23T09:00:00Z"),
    plannedEndDate: new Date("2024-10-23T00:00:00Z"),
    actualStartDate: null,
    actualEndDate: null,
    startProofImage: null,
    endProofImage: null,
    progress: 0,
    projId: "73288400-fc5f-4888-96c0-6733c7c3e024",
    subtasks: [
      {
        id: 1,
        taskId: 1,
        taskName: "New Task 1",
        plannedStartDate: new Date("2024-10-23T09:00:00Z"),
        plannedEndDate: new Date("2024-10-23T00:00:00Z"),
        actualStartDate: null,
        actualEndDate: null,
        startProofImage: null,
        endProofImage: null,
        progress: 0,
        subtasks: [],
      },
      {
        id: 2,
        taskId: 2,
        taskName: "New Task 2",
        plannedStartDate: new Date("2024-10-23T09:00:00Z"),
        plannedEndDate: new Date("2024-10-23T00:00:00Z"),
        actualStartDate: null,
        actualEndDate: null,
        startProofImage: null,
        endProofImage: null,
        progress: 0,
        subtasks: [
          {
            id: 4,
            taskId: 4,
            taskName: "New Task 4",
            plannedStartDate: new Date("2024-10-23T09:00:00Z"),
            plannedEndDate: new Date("2024-10-23T00:00:00Z"),
            actualStartDate: null,
            actualEndDate: null,
            startProofImage: null,
            endProofImage: null,
            progress: 0,
            subtasks: [],
          },
          {
            id: 5,
            taskId: 5,
            taskName: "New Task 5",
            plannedStartDate: new Date("2024-10-23T09:00:00Z"),
            plannedEndDate: new Date("2024-10-23T00:00:00Z"),
            actualStartDate: null,
            actualEndDate: null,
            startProofImage: null,
            endProofImage: null,
            progress: 0,
            subtasks: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    taskId: 6,
    taskName: "New Task 6",
    plannedStartDate: new Date("2024-10-23T09:00:00Z"),
    plannedEndDate: new Date("2024-10-23T00:00:00Z"),
    actualStartDate: null,
    actualEndDate: null,
    startProofImage: null,
    endProofImage: null,
    progress: 0,
    projId: "73288400-fc5f-4888-96c0-6733c7c3e024",
    subtasks: [],
  },
];
