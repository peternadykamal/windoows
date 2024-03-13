import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

// TODO: add hover background on drag a app
export const getRenderApp = (apps) => (provided, snapshot, rubric) => {
  const app = apps[rubric.source.index];
  const isDragging = snapshot.isDragging;
  const isFileExplorer = app.id == "1";

  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className={
        "group static flex flex-col justify-between hover:bg-hover-gray " +
        (isDragging ? "bg-gray-500/40" : "")
      }
    >
      <img className="mx-3 mt-1 size-7" src={app.iconPath} alt={app.name} />
      {!isFileExplorer ? (
        <div className="mx-auto h-[2px] w-5/6 bg-blue-300 group-hover:w-full"></div>
      ) : null}
    </div>
  );
};

function ApplicationInstances({ draggableId, index, apps }) {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {getRenderApp(apps)}
    </Draggable>
  );
}

function DndApps({ apps }) {
  return (
    <Droppable
      droppableId="taskbar"
      direction="horizontal"
      renderClone={getRenderApp(apps)}
    >
      {(provided) => (
        <div
          className="flex h-full"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {apps.map((app, index) => (
            <ApplicationInstances
              key={app.id}
              draggableId={app.id}
              index={index}
              apps={apps}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default DndApps;
