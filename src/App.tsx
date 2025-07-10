import { useState } from "react";
import "./App.css";
import TodoApp from "./pages/todo/TodoApp";
import ThemeProvider from "./state-management/context/theme-provider";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </>
  );
}

export default App;
