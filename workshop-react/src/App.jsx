import { useState } from 'react'
import './App.css'
import TestFunctions from "./Ecmascript/TestFunctions";
import Counter from './Components/Counter';
import ListManager from './Components/ListManager';
import ColorBox from './Components/ColorBox';
import NotesManager from './Components/NotesManager';
import TodoList from './Components/TodoList';
import ComponentClass from './Components/ComponentClass';
import Events from './Components/Events';


function App() {
 // const [count, setCount] = useState(0)

  return (
    <div>
        <TestFunctions />
        <ComponentClass/>
        <Counter initialCount={5} step={2} />
      <ListManager initialItems={["React", "Angular", "VueJs"]} placeholder="Ajouter un framework" />
      <ColorBox initialColor="#ff5733" colorOptions={["#3498db", "#2ecc71", "#e74c3c"]} />
      <NotesManager initialNotes={[10, 15, 18]} />
      <TodoList initialTasks={[{ name: "Apprendre React", priority: "Haute", completed: false }]} />
      <Events />
    </div>
);
}

export default App
