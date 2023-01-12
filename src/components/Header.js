import logo from "../assets/img/todo-list.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="todo-list" />
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
