import './App.css';
import Game from './components/Game';



const style={
  display:'flex',
  flexDirection: 'row',
  background:'lightblue'
}
function App() {
  return (
    <>
    <div className="App-header">
      <Game />
    </div>
    </>
  );
}

export default App;
