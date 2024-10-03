import axios from "axios";
import React, { useEffect, useState } from "react"; // Define the interface for the Gantt task data
interface GanttTask {
  taskId: number;
  taskName: string;
  startDate: string;
  endDate: string;
  duration: number;
  progress: number;
  predecessor: string;
  parentID: number;
}

const DisplayData = () => {
  const [tasks, setTasks] = useState<GanttTask[]>([]); // Use the GanttTask type
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<GanttTask[]>(
          "https://localhost:7233/api/Gantt/UrlDatasource"
        );
        setTasks(response.data); // Set the fetched data to the tasks state
      } catch (err) {
        setError("Failed to fetch tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Gantt Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId}>
            <strong>{task.taskName}</strong>
            <p>Start Date: {new Date(task.startDate).toLocaleString()}</p>
            <p>End Date: {new Date(task.endDate).toLocaleString()}</p>
            <p>Duration: {task.duration} days</p>
            <p>Progress: {task.progress}%</p>
            <p>Predecessor: {task.predecessor}</p>
            <p>Parent ID: {task.parentID}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
