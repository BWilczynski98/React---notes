import './App.css';
import Count from './Count';
import { Todos } from './Todos';

function App() {
  return (
    <div className="App">
      <div>
        <Count />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
