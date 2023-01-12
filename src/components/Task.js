import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  return (
    <div className="tasks">
      <input type="checkbox" />
      <p>{props.element}</p>
      <FontAwesomeIcon icon="trash" />
    </div>
  );
};

export default Task;
