import './App.css';
import MainPage from './MainPage/MainPage';
import Bar from './Bar/Bar';
import residue from './assets/residue.mp3';

function App() {
  return (
    <div className="App" style={{width:'100%' , minWidth:'100%'}}>
      <MainPage/>
      <Bar/>
    </div>
  );
}

export default App;
