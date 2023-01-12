const NewTask = ({ task, setTask, tabTask, setTabTask }) => {
  return (
    <div className="newtask">
      <input
        type="text"
        placeholder="new task"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <div
        onClick={() => {
          if (task) {
            const copyTabTask = [...tabTask];
            copyTabTask.push({ name: task, check: false });
            // copyTabTask.push(task);
            setTabTask(copyTabTask);
            console.log(copyTabTask);
          }
        }}
      >
        Add task
      </div>
    </div>
  );
};
export default NewTask;
