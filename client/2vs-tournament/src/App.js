import './App.css';
import MainContainer from './containers/MainContainer';
import LaunchScreen from './components/LaunchScreen';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        {/* <LaunchScreen path="/lauch" element={ <LaunchScreen/> } /> */}
        <MainContainer />
      </header>
    </div>
  );
}

export default App;
