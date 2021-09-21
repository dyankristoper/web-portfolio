import './App.scss';

// Components
import CustomHeader from './component/customHeader';
import Greeting from './component/greeting';

function App() {
  return (
    <div className="App">
      <CustomHeader header="Hello with React"></CustomHeader>
      <Greeting greet="Santa Clause"></Greeting>
    </div>
  );
}

export default App;
