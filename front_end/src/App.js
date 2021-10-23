import './App.css';
import Provider from './api/Provider'
import Routes from './Routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
