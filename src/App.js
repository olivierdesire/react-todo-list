import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt);

function App() {
  const [task, setTask] = useState("");
  const [tabTask, setTabTask] = useState([]);

  return (
    <div className="App">
      <Header />
      {tabTask.map((element, index) => {
        return <Task key={index} element={element} />;
      })}
      <NewTask
        task={task}
        setTask={setTask}
        tabTask={tabTask}
        setTabTask={setTabTask}
      />
    </div>
  );
}

export default App;
