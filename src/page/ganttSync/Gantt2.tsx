import "../ganttSync/css/tailwind.css";

import {
  GanttComponent,
  Inject,
  Selection,
  Toolbar,
  Edit,
  EditSettingsModel,
  ToolbarItem,
  Filter,
  TaskFieldsModel,
  RowDD,
  Reorder,
  DayMarkers,
  Sort,
  HolidaysDirective,
  HolidayDirective,
} from "@syncfusion/ej2-react-gantt";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2/data";
import axios from "axios";
import { useEffect, useState } from "react";

let ganttData = [
  {
    TaskId: 1,
    TaskName: "Project Planning",
    PlannedStartDate: new Date("2024-10-01"),
    PlannedEndDate: new Date("2024-10-05"),
    Duration: 5,
    Progress: 100,
    ProjectId: "4343tgerg3g36643634",
    ActualStartDate: new Date("2024-09-29"),
    ActualEndDate: new Date("2024-10-03"),
    Predecessor: null,
    ParentId: null,
  },
  {
    TaskId: 2,
    TaskName: "Requirement Analysis",
    PlannedStartDate: new Date("2024-10-06"),
    PlannedEndDate: new Date("2024-10-10"),
    Duration: 5,
    Progress: 60,

    ProjectId: 2,
    ActualStartDate: new Date("2024-10-05"),
    ActualEndDate: new Date("2024-10-09"),
    Predecessor: "1",
    ParentId: null,
  },
  {
    TaskId: 3,
    TaskName: "Design",
    PlannedStartDate: new Date("2024-10-11"),
    PlannedEndDate: new Date("2024-10-16"),
    Duration: 6,
    Progress: 40,
    ActualStartDate: new Date("2024-10-10"),
    ActualEndDate: new Date("2024-10-14"),
    Predecessor: "2",
    ParentId: null,
  },
  {
    TaskId: 4,
    TaskName: "Prototype Development",
    PlannedStartDate: new Date("2024-10-17"),
    PlannedEndDate: new Date("2024-10-22"),
    Duration: 6,
    Progress: 0,
    ActualStartDate: new Date("2024-10-16"),
    ActualEndDate: new Date("2024-10-20"),
    Predecessor: "3",
    ParentId: null,
  },
  {
    TaskId: 5,
    TaskName: "Design Phase 1",
    PlannedStartDate: new Date("2024-10-11"),
    PlannedEndDate: new Date("2024-10-13"),
    Duration: 3,
    Progress: 50,
    ActualStartDate: new Date("2024-10-10"),
    ActualEndDate: new Date("2024-10-12"),
    Predecessor: "2",
    ParentId: 3,
  },
  {
    TaskId: 6,
    TaskName: "Design Phase 2",
    PlannedStartDate: new Date("2024-10-14"),
    PlannedEndDate: new Date("2024-10-16"),
    Duration: 3,
    Progress: 30,
    ActualStartDate: new Date("2024-10-13"),
    ActualEndDate: new Date("2024-10-15"),
    Predecessor: "5",
    ParentId: 3,
  },
];

const Gantt2 = () => {
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
  };

  const taskFieldData: TaskFieldsModel = {
    id: "TaskId",
    name: "TaskName",
    startDate: "PlannedStartDate",
    endDate: "PlannedEndDate",
    duration: "Duration",
    progress: "Progress",
    baselineStartDate: "ActualStartDate",
    baselineEndDate: "ActualEndDate",
    dependency: "Predecessor",
    parentID: "ParentId",
  };

  let projectId = "3358c094-8f88-4f54-8eec-abe643719676";

  // Initialize DataManager
  // const dataManager: DataManager = new DataManager({
  //   url: "https://localhost:7233/api/Gantt",
  //   adaptor: new WebApiAdaptor(),
  //   crossDomain: true,
  // });

  const [dataManager, setDataManager] = useState<DataManager | []>([]);

  useEffect(() => {
    const dataManager: DataManager = new DataManager({
      url: `https://localhost:7233/api/Gantt/${projectId}`,
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
    });

    setDataManager(dataManager);
  }, [projectId]);

  return (
    <div className="p-5">
      <GanttComponent
        loadingIndicator={{ indicatorType: "Shimmer" }}
        dataSource={dataManager}
        // dataSource={ganttData}
        taskFields={taskFieldData}
        height="700px"
        timelineSettings={{
          timelineViewMode: "Week",
        }}
        splitterSettings={{ position: "50%" }}
        allowSelection={true}
        toolbar={toolbarOptions}
        allowResizing={true}
        highlightWeekends={true}
        labelSettings={{ taskLabel: "${Progress}%", rightLabel: "TaskName" }}
        baselineColor="orange"
        renderBaseline={true}
        showColumnMenu={true}
        editSettings={editOptions}
        allowRowDragAndDrop={true}
        allowReordering={true}
        allowParentDependency={true}
      >
        <Inject
          services={[
            Toolbar,
            Selection,
            Filter,
            Edit,
            RowDD,
            Reorder,
            DayMarkers,
            Sort,
          ]}
        />
      </GanttComponent>
    </div>
  );
};

export default Gantt2;
