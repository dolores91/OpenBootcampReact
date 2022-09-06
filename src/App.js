import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingFuncion from './components/pure/GreetingFuncion';
import TaskListComponent from './components/container/task_list';
import TaskComponent from './components/pure/task';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3.jsx';
import Ejemplo4 from './hooks/ejemplo4';
import LifeCycleExample from './components/pure/forms/lifeCycleExample';
import GreetingStyled from './components/pure/GreetingStyled';
import Clock from './components/pure/Clock';
import ClockF from './components/pure/ClockF';


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Greeting name="Dolo "></Greeting>
        <GreetingFuncion name ="Paula "></GreetingFuncion>
        
        <Ejemplo1></Ejemplo1>
        <Ejemplo2></Ejemplo2>
        <MiComponenteConContexto></MiComponenteConContexto>
        <Ejemplo4 nombre="dolores"> 
        // Todo loq ue hay aquí, es tratado como props.children 
          <h3>Contenido del props.children</h3> </Ejemplo4>
          <LifeCycleExample></LifeCycleExample>
          <GreetingStyled name="dolo"></GreetingStyled>
          <Clock></Clock> 
          <ClockF></ClockF> sacar este
      </header>*/}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
