import './App.css';
import BasicsOfUseEffectHook from './hooks/useEffectHook/BasicsOfUseEffectHook';
import BasicsOfUseStateHook from "./hooks/useStateHook/BasicsOfUseStateHook";

function App() {
  return (
    <div className="App">
      <h1 className='header'>React Important Concepts - 2022</h1>
      <BasicsOfUseStateHook />
      <hr />
      <BasicsOfUseEffectHook />
      <hr />
    </div>
  );
}

export default App;
