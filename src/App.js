import './css/App.css';
import Main from './components/Main';
import { sounds1, sounds2 } from './utils/Sounds';

function App() {
  return (
    <div className="App bg-back">
      <Main sounds1={sounds1} sounds2={sounds2} />
    </div>
  );
}

export default App;
