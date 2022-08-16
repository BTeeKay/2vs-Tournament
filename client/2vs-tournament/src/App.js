import './App.css';
import MainContainer from './containers/MainContainer';
import Header from './components/Header/Header';

function App() {

  return (

    <>

      <div className="App">

        <header className="App-header">
          <Header />
        </header>
        <MainContainer />

      </div>

    </>
  );
}

export default App;
