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
  HolidaysDirective,
  HolidayDirective,
  Sort,
} from "@syncfusion/ej2-react-gantt";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2/data";

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

  // Initialize DataManager
  const dataManager: DataManager = new DataManager({
    url: "https://localhost:7233/api/Gantt2",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

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
        allowRowDragAndDrop={true}
        allowReordering={true}
        allowParentDependency={true}
      >
        <HolidaysDirective>
          <HolidayDirective
            label="Local Holiday"
            cssClass="e-custom-holiday"
          ></HolidayDirective>
        </HolidaysDirective>
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

export default Gantt2;
