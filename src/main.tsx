import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2/base";
import Gantt2 from "./page/ganttSync/Gantt2";
import TestImage from "./page/TestImage";
import TasksDisplay from "./page/TasksDisplay";
import { tasks } from "./page/TaskList";

// Syncfusion student license
// Ayaw ni ihatag buanga ka
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXhdcHRcQ2BZWE1xV0U="
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <TestImage /> */}

    <TasksDisplay tasks={tasks} />
  </React.StrictMode>
);
