import "./MainContainer.css";
import AddTask from "../AddTask/AddTask.tsx";
import Task from "../Task/Task.tsx";

export default function MainContainer() {
  return (
    <>
      <div id="main-wrapper">
        <div id="tasks"></div>
        <AddTask></AddTask>
      </div>
    </>
  );
}
