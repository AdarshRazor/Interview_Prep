import './App.css';
//import { StateExample } from './hooks/use-state';  // use state hook
//import { EffectExample } from './hooks/use-effect'; // use effect hook
//import { ContextExample } from './hooks/use-content'; // use content hook
//import { ReducerExample } from './hooks/use-reducer'; // use reducer hook
import { RefExample } from './hooks/use-ref';

function App() {
  return (
    <div style={{margin: 15}}>
      <RefExample />
    </div>
  );
}

export default App;
