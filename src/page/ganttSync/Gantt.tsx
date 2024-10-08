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
} from "@syncfusion/ej2-react-gantt";
import {
  DataManager,
  WebApiAdaptor,
} from "@syncfusion/ej2/data";
const Gantt = () => {
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

  // Initialize DataManager
  const dataManager: DataManager = new DataManager({
    url: "https://localhost:7233/api/Gantt",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

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
        loadingIndicator={{ indicatorType: "Shimmer" }}
        dataSource={dataManager}
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
};

export default Gantt;
