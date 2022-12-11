import './App.css';
import TenKClassComp from './Components/TenKClassComp';
import TenKcoders from './Components/TenKcoders'
import TenKFunctionalComp from './Components/TenKFunctionalComp';
import MainFunction, { ParentComponent, ChildComponent } from './Components/MultipleFunctonalCompoents'

function App() {
  return (
    <div className="App">
      <h1>hello from $iva Kalyan</h1>
      <h2>Hello from 10K Coders</h2>
      <TenKcoders/>
      <TenKFunctionalComp/>
      <TenKClassComp/>
      <MainFunction/>
      
    </div>
  );
}

export default App;
