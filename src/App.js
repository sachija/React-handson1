import logo from './logo.svg';
import './App.css';
import ClassComponent from './component/ClassComponent';
import FunctionalComponent from './component/FunctionalComponent';

function App() {  
  return(
    <div>
    <h1>Styling using Functional and Class Components</h1>
      <div className='boxes'>
        <FunctionalComponent/>
        <ClassComponent/>
      </div>
    </div>
  )
}

export default App;



