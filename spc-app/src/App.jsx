import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import GoodBye from './GoodBye';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <Hello />
      <JSXExamples />
      <GoodBye />
    </div>
  );
}

export default App;
