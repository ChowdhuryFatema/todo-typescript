import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import './App.css';

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar></Navbar>
      <AddTodo />
      <Todos></Todos>
    </main>
  );
};

export default App;