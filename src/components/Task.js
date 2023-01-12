import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  return (
    <div className="list-task">
      <div className="tasks">
        <input
          type="checkbox"
          onChange={() => {
            props.element.check = true;
          }}
        />
        {console.log(props.element.check)}
        <p>{props.element.name}</p>
        <FontAwesomeIcon icon="trash" />
      </div>
    </div>
  );
};

export default Task;
