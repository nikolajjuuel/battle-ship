import './App.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PlayerBoard from './PlayerBoard';
import OpponentBoard from './OpponentBoard'
import Destroyer from './Destroyer';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <PlayerBoard />
        <Destroyer />
      </div>
    </DndProvider>
  );
}

export default App;
