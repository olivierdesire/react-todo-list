import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ index, element, tabTask, setTabTask }) => {
  return (
    <div className="list-task">
      <div className="tasks">
        <input
          type="checkbox"
          value={element.check}
          onChange={(event) => {
            const copyTabTask = [...tabTask];
            if (element.check) {
              copyTabTask[index].check = false;
            } else {
              copyTabTask[index].check = true;
            }
            setTabTask(copyTabTask);
          }}
        />
        <p className={tabTask[index].check ? "barre" : ""}>{element.name}</p>
        <FontAwesomeIcon
          className="trash"
          icon="trash"
          onClick={() => {
            const newtab = [];
            for (let i = 0; i < tabTask.length; i++) {
              if (i !== index) {
                newtab.push(tabTask[i]);
              }
            }
            setTabTask(newtab);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
