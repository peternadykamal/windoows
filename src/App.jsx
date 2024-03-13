import { useState } from "react";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";
import WindowSpace from "./WindowSpace";
import { DragDropContext } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// application list
const appData = [
  { id: "1", name: "File Explorer", iconPath: "./public/file-explorer.png" },
  { id: "2", name: "Chrome", iconPath: "./public/chrome.svg" },
  { id: "3", name: "VS Code", iconPath: "./public/vscode.png" },
];
function App() {
  const [applications, setApplications] = useState(appData);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      applications,
      result.source.index,
      result.destination.index,
    );

    setApplications(items);
  };

  return (
    <Desktop>
      <WindowSpace></WindowSpace>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Taskbar apps={applications} />
      </DragDropContext>
    </Desktop>
  );
}

export default App;
