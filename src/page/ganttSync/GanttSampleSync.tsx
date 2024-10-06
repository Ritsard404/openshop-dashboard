import "../ganttSync/css/tailwind.css";

import React, { useEffect, useRef, useState } from "react";
import {
  GanttComponent,
  Inject,
  Selection,
  Toolbar,
  Edit,
  EditSettingsModel,
  ToolbarItem,
  ColumnsDirective,
  ColumnDirective,
  ColumnMenu,
  Filter,
  TaskFieldsModel,
} from "@syncfusion/ej2-react-gantt";
import { GanttSyncData, taskFields } from "./data";
import {
  DataManager,
  RemoteSaveAdaptor,
  UrlAdaptor,
  WebApiAdaptor,
  WebMethodAdaptor,
} from "@syncfusion/ej2/data";
import axios from "axios";
import { filter } from "@syncfusion/ej2/filemanager";

const GanttSampleSync = () => {
  const toolbarOptions: ToolbarItem[] = [
    "Add",
    "Edit",
    "Delete",
    "Cancel",
    "Update",
    "PrevTimeSpan",
    "NextTimeSpan",
    "ExpandAll",
    "CollapseAll",
    "Search",
    "Indent",
    "Outdent",
    "ZoomIn",
    "ZoomOut",
    "ZoomToFit",
  ];

  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
    mode: "Auto",
  };

  // Helper function to format date as 'MM dd, yyyy'
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // // Format dates in GanttSyncData
  // const formattedGanttSyncData = GanttSyncData.map((task) => ({
  //   ...task,
  //   StartDate: formatDate(task.PlannedStartDate),
  //   EndDate: formatDate(task.PlannedEndDate),
  //   subtasks: task.subtasks.map((subtask) => ({
  //     ...subtask,
  //     StartDate: formatDate(subtask.PlannedStartDate),
  //     EndDate: formatDate(subtask.PlannedEndDate),
  //   })),
  // }));

  // Initialize DataManager
  const dataManager: DataManager = new DataManager({
    url: "https://localhost:7233/api/Gantt",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  // Initialize DataManager
  const sampleDataManager: DataManager = new DataManager({
    url: "https://localhost:7233/api/Gantt",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  const sampleTaskFields: any = {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    dependency: "Predecessor",
    child: "SubTasks",
  };

  // const taskFields: TaskFieldsModel = {
  //   id: "TaskId", // Updated to match the model
  //   name: "TaskName", // Correct
  //   startDate: "StartDate", // CorrectendDate: "endDate",,
  //   duration: "Duration",
  //   progress: "Progress", // Correct
  //   dependency: "Predecessor", // Correct
  //   child: "SubTasks", // Uncomment if you have subtasks
  // };

  const taskFieldData: TaskFieldsModel = {
    id: "TaskId",
    name: "TaskName",
    startDate: "PlannedStartDate",
    endDate: "PlannedEndDate",
    duration: "Week",
    progress: "Progress",
    baselineStartDate: "ActualStartDate",
    baselineEndDate: "ActualEndDate",
    child: "SubTasks",
    dependency: "Predecessor",
  };

  return (
    <div className="p-5">
      <GanttComponent
        // loadingIndicator={{ indicatorType: "Shimmer" }}
        dataSource={GanttSyncData}
        taskFields={taskFields}
        // dataSource={dataManager}
        // taskFields={taskFieldData}
        height="450px"
        // timelineSettings={{
        //   timelineViewMode: "Week",
        // }}
        splitterSettings={{ position: "50%" }}
        allowSelection={true}
        toolbar={toolbarOptions}
        // allowResizing={true}
        // highlightWeekends={true}
        labelSettings={{ taskLabel: "${Progress}%", rightLabel: "TaskName" }}
        baselineColor="orange"
        renderBaseline={true}
        // showColumnMenu={true}

        editSettings={editOptions}
      >
        <Inject services={[Toolbar, Selection, Filter, Edit]} />
        {/* <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" />
          <ColumnDirective field="TaskName" headerText="Name" />
          <ColumnDirective
            field="PlannedStartDate"
            format="MMMM d, yyyy"
            headerText="Start Date"
          />
          <ColumnDirective
            field="PlannedEndDate"
            format="MMMM d, yyyy"
            headerText="End Date"
            allowEditing
          />
          <ColumnDirective
            field="Week"
            headerText="Duration (Days)"
            allowEditing={false}
          />
        </ColumnsDirective> */}
      </GanttComponent>
    </div>
  );

  // return (
  //   <GanttComponent
  //     dataSource={dataManager}
  //     taskFields={taskFieldData}
  //     toolbar={toolbarOptions}
  //     // toolbar={["Add", "Edit", "Delete", "Cancel", "Update"]}
  //     allowSelection={true}
  //     editSettings={editOptions}
  //     height="450px"
  //   >
  //     <Inject services={[Toolbar, Selection, Filter, Edit]} />
  //     {/* <Inject services={[Toolbar, Edit]} /> */}
  //     {/* <ColumnsDirective>
  //       <ColumnDirective field="TaskId" headerText="ID" />
  //       <ColumnDirective field="TaskName" headerText="Task Name" />
  //       <ColumnDirective
  //         field="StartDate"
  //         headerText="Start Date"
  //         format="yMd"
  //       />
  //       <ColumnDirective field="EndDate" headerText="End Date" format="yMd" />
  //       <ColumnDirective field="Duration" headerText="Duration" />
  //       <ColumnDirective field="Progress" headerText="Progress (%)" />
  //     </ColumnsDirective> */}
  //   </GanttComponent>
  // );
};

export default GanttSampleSync;
