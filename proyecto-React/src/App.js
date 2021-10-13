import Productos from './components/Productos';
import SideBar from './components/Sidebar';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Usuarios/>
      <Productos/>
      <SideBar/>
      </header>
    </div>
  );
}

export default App;
