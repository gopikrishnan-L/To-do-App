import './styles/App.css';
import Navbar from './navbar'
import TodoManager from './todoManager'

function App() {
  return (
    <>
      <Navbar />
      <h1>To-do List App</h1>
      <div className='main-box'>
        <TodoManager />
      </div>
    </>
  );
}

export default App;
